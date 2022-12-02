import { useEffect } from "react";

// styled components
import { Heading } from "../UI/Heading";
import { InnerWrapper } from "../UI/InnerWrapper";
import { Loader } from "../UI/Loader";

// custom hooks
import useGenerator from "../../hooks/useGenerator";

// constants
import { STEP_DETERMINE_PLAYTHROUGH } from "../../constants/steps";

// utils
import { determineModifier } from "../../utils/determineModifier";

const DeterminePlaythrough = (): JSX.Element | null => {
  const [state, dispatch] = useGenerator();

  // reusable var for below
  const isCurrentStep = state.currentStep === STEP_DETERMINE_PLAYTHROUGH;

  // show this component only for a limited amount of time
  useEffect(() => {
    const timerCallback = () => dispatch({ type: "SET_STEP_TO_RESULTS" });

    const timer = () => setTimeout(timerCallback, 1000);

    if (isCurrentStep) {
      timer();
    }

    return () => {
      if (isCurrentStep) clearTimeout(timer());
    };
  }, [dispatch, isCurrentStep, state.currentStep]);

  useEffect(() => {
    determineModifier(state, dispatch);

    // THESE ARE THE CORRECT DEPENDENCIES
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, state.selectedGame, state.selectedRunType]);

  return isCurrentStep ? (
    <InnerWrapper>
      <Loader />

      <Heading as="h2" size="medium">
        Choosing your playthrough settings...
      </Heading>
    </InnerWrapper>
  ) : null;
};

export default DeterminePlaythrough;
