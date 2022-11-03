import { useEffect } from "react";

// styled components
import { Heading } from "../UI/Heading";
import { InnerWrapper } from "../UI/InnerWrapper";
import { Loader } from "../UI/Loader";

// custom hooks
import useGenerator from "../../hooks/useGenerator";

// data
import {
  allegianceOptions,
  miscellaneousOptions,
  rarityOptions,
  superiorityOptions
} from "../../data/options";

// constants
import { STEP_DETERMINE_PLAYTHROUGH } from "../../constants/steps";

// utils
import { getRandomArrayIndex } from "../../utils/getRandomArrayIndex";

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
    const determineModifier = (): void => {
      // get matching data
      const matchingAllegiances = allegianceOptions.filter(
        (alg) => alg.game === state.selectedGame
      );
      const matchingRarities = rarityOptions.filter((rar) => rar.game === state.selectedGame);
      const matchingMiscObj = miscellaneousOptions[getRandomArrayIndex(miscellaneousOptions)];

      switch (state.selectedRunType) {
        case "Superiority":
          dispatch({
            type: "SET_MODIFIER",
            payload: {
              name: `${superiorityOptions[getRandomArrayIndex(superiorityOptions)]} superiority`,
              description: null
            }
          });
          break;

        case "Allegiance":
          dispatch({
            type: "SET_MODIFIER",
            payload: {
              name: `${
                matchingAllegiances[getRandomArrayIndex(matchingAllegiances)].manufacturer
              } items only`,
              description: null
            }
          });
          break;

        case "Rarity":
          dispatch({
            type: "SET_MODIFIER",
            payload: {
              name: `${matchingRarities[getRandomArrayIndex(matchingRarities)].rarity} items only`,
              description: null
            }
          });
          break;

        case "Miscellaneous":
          dispatch({
            type: "SET_MODIFIER",
            payload: {
              name: `${matchingMiscObj.name}`,
              description: `${matchingMiscObj.description}`
            }
          });
          break;

        default:
          break;
      }
    };

    determineModifier();
  }, [dispatch, state.currentStep, state.selectedGame, state.selectedRunType]);

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
