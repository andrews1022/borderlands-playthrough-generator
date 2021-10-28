import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// context
import GeneratorContext from '../../context/generatorContext';

// data
import { PHASE_RUN_TYPE } from '../../data/constants';
import { options } from '../../data/options';

const RunType = () => {
	const ctx = useContext(GeneratorContext);

	return (
		<>
			{ctx?.state.currentPhase === PHASE_RUN_TYPE ? (
				<div>
					<h2>Select Your Run Type</h2>
					<p>A modifier will be chosen at random based on your selection below.</p>
					<ul className='form__card-list'>
						{options.map(({ name, description, icon }) => (
							<li key={name}>
								<div>
									<FontAwesomeIcon icon={icon} size='3x' className='form__card-icon' />
									<h3>{name}</h3>
								</div>

								<div>
									<p>
										{name === 'Allegiance' ? 'An' : 'A'} {name} run {description}.
									</p>
									<button
										type='button'
										onClick={() => ctx.dispatch({ type: 'SELECT_RUN_TYPE', payload: name })}
									>
										Select
									</button>
								</div>
							</li>
						))}
					</ul>
				</div>
			) : null}
		</>
	);
};

export default RunType;
