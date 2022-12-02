import type { Dispatch } from "react";
import type { GeneratorActions, GeneratorState } from "../reducers/generatorReducer";

// data
import {
  allegianceOptions,
  miscellaneousOptions,
  rarityOptions,
  superiorityOptions,
} from "../data/options";

// utils
import { getRandomArrayIndex } from "./getRandomArrayIndex";

export const determineModifier = (
  state: GeneratorState,
  dispatch: Dispatch<GeneratorActions>
): void => {
  // get matching data
  const matchingAllegiances = allegianceOptions.filter((alg) => alg.game === state.selectedGame);
  const matchingRarities = rarityOptions.filter((rar) => rar.game === state.selectedGame);
  const matchingMiscObj = miscellaneousOptions[getRandomArrayIndex(miscellaneousOptions)];

  switch (state.selectedRunType) {
    case "Superiority":
      dispatch({
        type: "SET_MODIFIER",
        payload: {
          name: `${superiorityOptions[getRandomArrayIndex(superiorityOptions)]} superiority`,
          description: null,
        },
      });
      break;

    case "Allegiance":
      dispatch({
        type: "SET_MODIFIER",
        payload: {
          name: `${
            matchingAllegiances[getRandomArrayIndex(matchingAllegiances)].manufacturer
          } items only`,
          description: null,
        },
      });
      break;

    case "Rarity":
      dispatch({
        type: "SET_MODIFIER",
        payload: {
          name: `${matchingRarities[getRandomArrayIndex(matchingRarities)].rarity} items only`,
          description: null,
        },
      });
      break;

    case "Miscellaneous":
      dispatch({
        type: "SET_MODIFIER",
        payload: {
          name: `${matchingMiscObj.name}`,
          description: `${matchingMiscObj.description}`,
        },
      });
      break;

    default:
      break;
  }
};
