import React, { useContext, useEffect } from 'react';

// context
import GeneratorContext from '../../context/generatorContext';

// styled components
import { SubHeading } from '../../styles/lib';
import Loader from './styles';
import { InnerWrapper } from '../UI/InnerWrapper';

// data
import {
	allegianceOptions,
	miscellaneousOptions,
	rarityOptions,
	superiorityOptions
} from '../../data/options';

// constants
import { STEP_DETERMINE_PLAYTHROUGH } from '../../constants/constants';

// utils
import { getRandomArrayIndex } from '../../utils/getRandomArrayIndex';

const DeterminePlaythrough = () => {
	const generatorContext = useContext(GeneratorContext);

	// show this component only for a limited amount of time
	useEffect(() => {
		// eslint-disable-next-line operator-linebreak
		const timer =
			generatorContext.generatorState.currentStep === STEP_DETERMINE_PLAYTHROUGH
				? setTimeout(() => {
						generatorContext.generatorDispatch({ type: 'SET_STEP_TO_RESULTS' });
				  }, 1000)
				: null;

		return () => {
			clearTimeout(timer!);
		};
	}, [generatorContext.generatorState.currentStep]);

	useEffect(() => {
		const determineModifier = () => {
			const { selectedRunType } = generatorContext.generatorState;

			const matchingAllegiances = allegianceOptions.filter(
				(allegiance) => allegiance.game === generatorContext.generatorState.selectedGame
			);

			const matchingRarities = rarityOptions.filter(
				(rarity) => rarity.game === generatorContext.generatorState.selectedGame
			);

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
								matchingAllegiances[getRandomArrayIndex(matchingAllegiances)].name
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
	}, [generatorContext.generatorState.currentStep]);

	return generatorContext.generatorState.currentStep === STEP_DETERMINE_PLAYTHROUGH ? (
		<InnerWrapper>
			<Loader />
			<SubHeading>Choosing your playthrough settings...</SubHeading>
		</InnerWrapper>
	) : null;
};

export default DeterminePlaythrough;
