import React, { useContext } from 'react';

// context
import GeneratorContext from '../../context/generatorContext';

// data
import { PHASE_RESULTS } from '../../data/constants';

const Results = () => {
	const ctx = useContext(GeneratorContext);

	return (
		<>
			{ctx?.state.currentPhase === PHASE_RESULTS ? (
				<div>
					<h2>Here are the results!</h2>

					<div>
						<p>
							For your next playthrough of <span>{ctx.state.selectedGame}</span>, you&apos;ll play
							as <span>{ctx.state.selectedVaultHunter}</span> with{' '}
							<span>
								{ctx.state.modifierDescription
									? `the ${ctx.state.selectedModifier} modifier`
									: `${ctx.state.selectedModifier}`}
							</span>
							!
						</p>

						{ctx.state.modifierDescription ? (
							<p>
								The <span>{ctx.state.selectedModifier}</span> modifier is when you{' '}
								{ctx.state.modifierDescription}.
							</p>
						) : null}
					</div>

					<button onClick={() => ctx.dispatch({ type: 'RESTART' })} type='button'>
						Start Over?
					</button>
				</div>
			) : null}
		</>
	);
};

export default Results;
