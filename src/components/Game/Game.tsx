// styled components
import * as S from "./Game.styles";
import { Button } from "../UI/Button";
import { Heading } from "../UI/Heading";
import { InnerWrapper } from "../UI/InnerWrapper";

// custom hooks
import useGenerator from "../../hooks/useGenerator";

// data
import games from "../../data/games";

// constants
import { STEP_GAME } from "../../constants/steps";

const Game = () => {
  const [state, dispatch] = useGenerator();

  // event functions
  const changeStepHandler = (game: string) => {
    dispatch({ type: "SELECT_GAME", payload: game });
  };

  return state.currentStep === STEP_GAME ? (
    <InnerWrapper>
      <Heading as="h2" size="medium">
        Select Your Game
      </Heading>

      <S.Row>
        {games.map((game) => (
          <li key={game}>
            <Button mode="secondary" onClick={() => changeStepHandler(game)} type="button">
              {game}
            </Button>
          </li>
        ))}
      </S.Row>
    </InnerWrapper>
  ) : null;
};

export default Game;
