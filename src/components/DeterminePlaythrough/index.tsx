import React, { useContext, useEffect } from 'react';

// context
import GeneratorContext from '../../context/generatorContext';

// styled components
import Loader from './styles';
import { Heading } from '../UI/Heading';
import { InnerWrapper } from '../UI/InnerWrapper';

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

	// show this component only for a limited amount of time
	useEffect(() => {
		// eslint-disable-next-line operator-linebreak
		const timer =
			currentStep === STEP_DETERMINE_PLAYTHROUGH
				? setTimeout(() => {
						generatorContext.generatorDispatch({ type: 'SET_STEP_TO_RESULTS' });
				  }, 1000)
				: null;

		return () => {
			clearTimeout(timer!);
		};
	}, [currentStep]);

	useEffect(() => {
		const determineModifier = () => {
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

	return currentStep === STEP_DETERMINE_PLAYTHROUGH ? (
		<InnerWrapper>
			<Loader />

			<Heading as='h2' size='medium'>
				Choosing your playthrough settings...
			</Heading>
		</InnerWrapper>
	) : null;
};

export default DeterminePlaythrough;
