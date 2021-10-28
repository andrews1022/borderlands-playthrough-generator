import React, { useContext, useEffect } from 'react';

// context
import GeneratorContext from '../../context/generatorContext';

// data
import { PHASE_DETERMINING_PLAYTHROUGH } from '../../data/constants';
import {
	allegianceOptions,
	miscellaneousOptions,
	rarityOptions,
	superiorityOptions
} from '../../data/options';

// utils
import getRandomArrayIndex from '../../utils/getRandomArrayIndex';

const DeterminePlaythrough = () => {
	const ctx = useContext(GeneratorContext);

	// show this component only for a limited amount of time
	useEffect(() => {
		// eslint-disable-next-line operator-linebreak
		const timeId =
			ctx?.state.currentPhase === 'determining-playthrough'
				? setTimeout(() => {
						ctx.dispatch({ type: 'SET_PHASE_TO_RESULTS' });
				  }, 1000)
				: null;

		return () => {
			clearTimeout(timeId!);
		};
	}, [ctx?.dispatch, ctx?.state.currentPhase]);

	useEffect(() => {
		const determineModifier = () => {
			const selectedRunType = ctx?.state.selectedRunType;

			const matchingAllegiances = allegianceOptions.filter(
				(allegiance) => allegiance.game === ctx?.state.selectedGame
			);

			const matchingRarities = rarityOptions.filter(
				(rarity) => rarity.game === ctx?.state.selectedGame
			);

			const matchingMiscObj = miscellaneousOptions[getRandomArrayIndex(miscellaneousOptions)];

			switch (selectedRunType) {
				case 'Superiority':
					ctx?.dispatch({
						type: 'SET_MODIFIER',
						payload: {
							name: `${superiorityOptions[getRandomArrayIndex(superiorityOptions)]} superiority`,
							description: null
						}
					});
					break;

				case 'Allegiance':
					ctx?.dispatch({
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
					ctx?.dispatch({
						type: 'SET_MODIFIER',
						payload: {
							name: `${matchingRarities[getRandomArrayIndex(matchingRarities)].rarity} items only`,
							description: null
						}
					});
					break;

				case 'Miscellaneous':
					ctx?.dispatch({
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
	}, [ctx?.dispatch, ctx?.state.currentPhase]);

	return (
		<>
			{ctx?.state.currentPhase === PHASE_DETERMINING_PLAYTHROUGH ? (
				<div className='form__inner'>
					<div className='form__loader' />
					<h2 className='form__loader-text'>Choosing your playthrough settings...</h2>
				</div>
			) : null}
		</>
	);
};

export default DeterminePlaythrough;
