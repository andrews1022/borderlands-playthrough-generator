// styled components
import * as S from "./Intro.styles";
import { Button } from "../UI/Button";
import { Heading } from "../UI/Heading";
import { InnerWrapper } from "../UI/InnerWrapper";

// custom hooks
import useGenerator from "../../hooks/useGenerator";

// constants
import { STEP_INTRO } from "../../constants/steps";

const Intro = (): JSX.Element | null => {
  const [state, dispatch] = useGenerator();

  // event functions
  const changeStepHandler = () => {
    dispatch({ type: "SET_STEP_TO_GAME" });
  };

  return state.currentStep === STEP_INTRO ? (
    <InnerWrapper>
      <Heading as="h1" size="large">
        Borderlands Playthrough Generator
      </Heading>

      <S.Tagline>
        Looking for a fun and exciting new way to play through your favourite Borderlands game?{" "}
        <br />
        Use this app to generate it for you!
      </S.Tagline>

      <Button mode="primary" onClick={changeStepHandler} type="button">
        Get Started
      </Button>
    </InnerWrapper>
  ) : null;
};

export default Intro;
