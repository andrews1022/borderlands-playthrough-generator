import React, { useContext } from 'react';

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
				<div className='form__inner'>
					<h2 className='form__sub-heading'>Select Your Game</h2>
					<ul className='form__button-list'>
						{games.map((game) => (
							<li className='form__button-list-item' key={game}>
								<button
									className='button button--selection'
									type='button'
									onClick={() => ctx.dispatch({ type: 'SELECT_GAME', payload: game })}
								>
									{game}
								</button>
							</li>
						))}
					</ul>
				</div>
			) : null}
		</>
	);
};

export default Game;
