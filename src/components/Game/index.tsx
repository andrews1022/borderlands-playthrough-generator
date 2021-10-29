import React, { useContext } from 'react';

// styled components
import { Button, InnerWrapper, SubHeading } from '../../styles/lib';
import ButtonRow from './styles';

// context
import GeneratorContext from '../../context/generatorContext';

// data
import { PHASE_GAME } from '../../data/constants';
import games from '../../data/games';

const Game = () => {
	const ctx = useContext(GeneratorContext);

	return (
		<>
			{ctx?.state.currentPhase === PHASE_GAME ? (
				<InnerWrapper>
					<SubHeading>Select Your Game</SubHeading>

					<ButtonRow>
						{games.map((game) => (
							<li key={game}>
								<Button
									mode='step'
									onClick={() => ctx.dispatch({ type: 'SELECT_GAME', payload: game })}
									type='button'
								>
									{game}
								</Button>
							</li>
						))}
					</ButtonRow>
				</InnerWrapper>
			) : null}
		</>
	);
};

export default Game;
