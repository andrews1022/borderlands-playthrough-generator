import React, { useContext } from 'react';

// styled components
import { Button, InnerWrapper } from '../../styles/lib';
import { MainHeading, Tagline } from './styles';

// context
import GeneratorContext from '../../context/generatorContext';

// data
import { PHASE_INTRO } from '../../data/constants';

const Intro = () => {
	const ctx = useContext(GeneratorContext);

	return (
		<>
			{ctx?.state.currentPhase === PHASE_INTRO ? (
				<InnerWrapper>
					<MainHeading>Borderlands Playthrough Generator</MainHeading>

					<Tagline>
						Looking for a fun and exciting new way to play through your favourite Borderlands game?{' '}
						<br />
						Use this app to generate it for you!
					</Tagline>

					<Button
						mode='boundary'
						onClick={() => ctx.dispatch({ type: 'SET_PHASE_TO_GAME' })}
						type='button'
					>
						Get Started
					</Button>
				</InnerWrapper>
			) : null}
		</>
	);
};

export default Intro;
