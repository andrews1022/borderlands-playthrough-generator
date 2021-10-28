import React, { useContext } from 'react';

// styled components
import { Button } from '../../styles/lib';

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
				<div>
					<h2>Select Your Game</h2>
					<ul>
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
					</ul>
				</div>
			) : null}
		</>
	);
};

export default Game;
