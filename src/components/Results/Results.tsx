// styled components
import * as S from "./Results.styles";
import { Button } from "../UI/Button";
import { Copy } from "../UI/Copy";
import { Heading } from "../UI/Heading";
import { InnerWrapper } from "../UI/InnerWrapper";

// custom hooks
import useGenerator from "../../hooks/useGenerator";

// constants
import { STEP_RESULTS } from "../../constants/steps";

const Results = () => {
  const [state, dispatch] = useGenerator();

  // event functions
  const changeStepHandler = () => {
    dispatch({ type: "RESTART" });
  };

  return state.currentStep === STEP_RESULTS ? (
    <InnerWrapper>
      <Heading as="h2" size="medium">
        Here are the results!
      </Heading>

      <S.Wrapper>
        <Copy>
          For your next playthrough of <S.Result>{state.selectedGame}</S.Result>, you&apos;ll play
          as <S.Result>{state.selectedVaultHunter}</S.Result> with{" "}
          <S.Result>
            {state.modifierDescription
              ? `the ${state.selectedModifier} modifier`
              : `${state.selectedModifier}`}
          </S.Result>
          !
        </Copy>

        {state.modifierDescription ? (
          <Copy>
            The <S.Result>{state.selectedModifier}</S.Result> modifier is when you{" "}
            {state.modifierDescription}.
          </Copy>
        ) : null}
      </S.Wrapper>

      <Button mode="primary" onClick={changeStepHandler} type="button">
        Start Over?
      </Button>
    </InnerWrapper>
  ) : null;
};

export default Results;
