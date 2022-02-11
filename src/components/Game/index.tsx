import React, { useContext } from 'react';

// context
import GeneratorContext from '../../context/generatorContext';

// styled components
import ButtonRow from './styles';
import { Button } from '../UI/Button';
import { InnerWrapper } from '../UI/InnerWrapper';

// data
import games from '../../data/games';

// constants
import { STEP_GAME } from '../../constants/steps';
import { Heading } from '../UI/Heading';

const Game = () => {
	const generatorContext = useContext(GeneratorContext);

	// destructure state fields for cleaner jsx
	const { currentStep } = generatorContext.generatorState;

	// event functions
	const changeStepHandler = (game: string) => {
		generatorContext.generatorDispatch({ type: 'SELECT_GAME', payload: game });
	};

	return currentStep === STEP_GAME ? (
		<InnerWrapper>
			<Heading as='h2' size='medium'>
				Select Your Game
			</Heading>

			<ButtonRow>
				{games.map((game: string) => (
					<li key={game}>
						<Button mode='secondary' onClick={() => changeStepHandler(game)} type='button'>
							{game}
						</Button>
					</li>
				))}
			</ButtonRow>
		</InnerWrapper>
	) : null;
};

export default Game;
