import React, { useContext } from 'react';

// context
import GeneratorContext from '../../context/generatorContext';

// styled components
import { Button, InnerWrapper, SubHeading } from '../../styles/lib';
import ButtonRow from './styles';

// data
import games from '../../data/games';

// constants
import { STEP_GAME } from '../../constants/constants';

const Game = () => {
	const generatorContext = useContext(GeneratorContext);

	return generatorContext.generatorState.currentStep === STEP_GAME ? (
		<InnerWrapper>
			<SubHeading>Select Your Game</SubHeading>

			<ButtonRow>
				{games.map((game) => (
					<li key={game}>
						<Button
							mode='step'
							onClick={() =>
								generatorContext.generatorDispatch({ type: 'SELECT_GAME', payload: game })
							}
							type='button'
						>
							{game}
						</Button>
					</li>
				))}
			</ButtonRow>
		</InnerWrapper>
	) : null;
};

export default Game;
