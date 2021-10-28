import React, { useContext } from 'react';

// context
import GeneratorContext from '../../context/generatorContext';

// data
import { PHASE_INTRO } from '../../data/constants';

const Intro = () => {
	const ctx = useContext(GeneratorContext);

	return (
		<>
			{ctx?.state.currentPhase === PHASE_INTRO ? (
				<div>
					<h1>Borderlands Playthrough Generator</h1>

					<h2>
						Looking for a fun and exciting new way to play through your favourite Borderlands game?{' '}
						<br />
						Use this app to generate it for you!
					</h2>

					<button onClick={() => ctx.dispatch({ type: 'SET_PHASE_TO_GAME' })} type='button'>
						Get Started
					</button>
				</div>
			) : null}
		</>
	);
};

export default Intro;
