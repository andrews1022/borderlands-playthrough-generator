import React, { useContext, useEffect } from 'react';

// context
import GeneratorContext from '../../context/GeneratorContext';

// styled components
import { Heading } from '../UI/Heading';
import { InnerWrapper } from '../UI/InnerWrapper';
import { Loader } from '../UI/Loader';

// data
import {
  allegianceOptions,
  miscellaneousOptions,
  rarityOptions,
  superiorityOptions
} from '../../data/options';

// constants
import { STEP_DETERMINE_PLAYTHROUGH } from '../../constants/steps';

// utils
import { getRandomArrayIndex } from '../../utils/getRandomArrayIndex';

const DeterminePlaythrough = () => {
  const generatorContext = useContext(GeneratorContext);

  // destructure state fields for cleaner jsx
  const { currentStep, selectedGame, selectedRunType } = generatorContext.generatorState;

  // reusable var for below
  const isCurrentStep = currentStep === STEP_DETERMINE_PLAYTHROUGH;

  // show this component only for a limited amount of time
  useEffect(() => {
    const timerCallback = () => generatorContext.generatorDispatch({ type: 'SET_STEP_TO_RESULTS' });

    const timer = () => setTimeout(timerCallback, 1000);

    if (isCurrentStep) timer();

    return () => {
      if (isCurrentStep) clearTimeout(timer());
    };
  }, [currentStep]);

  useEffect(() => {
    const determineModifier = (): void => {
      // get matching data
      const matchingAllegiances = allegianceOptions.filter((alg) => alg.game === selectedGame);
      const matchingRarities = rarityOptions.filter((rar) => rar.game === selectedGame);
      const matchingMiscObj = miscellaneousOptions[getRandomArrayIndex(miscellaneousOptions)];

      switch (selectedRunType) {
        case 'Superiority':
          generatorContext.generatorDispatch({
            type: 'SET_MODIFIER',
            payload: {
              name: `${superiorityOptions[getRandomArrayIndex(superiorityOptions)]} superiority`,
              description: null
            }
          });
          break;

        case 'Allegiance':
          generatorContext.generatorDispatch({
            type: 'SET_MODIFIER',
            payload: {
              name: `${
                matchingAllegiances[getRandomArrayIndex(matchingAllegiances)].manufacturer
              } items only`,
              description: null
            }
          });
          break;

        case 'Rarity':
          generatorContext.generatorDispatch({
            type: 'SET_MODIFIER',
            payload: {
              name: `${matchingRarities[getRandomArrayIndex(matchingRarities)].rarity} items only`,
              description: null
            }
          });
          break;

        case 'Miscellaneous':
          generatorContext.generatorDispatch({
            type: 'SET_MODIFIER',
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
  }, [currentStep]);

  return isCurrentStep ? (
    <InnerWrapper>
      <Loader />

      <Heading as='h2' size='medium'>
        Choosing your playthrough settings...
      </Heading>
    </InnerWrapper>
  ) : null;
};

export default DeterminePlaythrough;
