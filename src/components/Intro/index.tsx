import React, { useContext } from 'react';

// context
import GeneratorContext from '../../context/generatorContext';

// styled components
import { MainHeading, Tagline } from './styles';
import { Button } from '../UI/Button';
import { InnerWrapper } from '../UI/InnerWrapper';

// constants
import { STEP_INTRO } from '../../constants/constants';

const Intro = () => {
	const generatorContext = useContext(GeneratorContext);

	return generatorContext.generatorState.currentStep === STEP_INTRO ? (
		<InnerWrapper>
			<MainHeading>Borderlands Playthrough Generator</MainHeading>

			<Tagline>
				Looking for a fun and exciting new way to play through your favourite Borderlands game?{' '}
				<br />
				Use this app to generate it for you!
			</Tagline>

			<Button
				mode='primary'
				onClick={() => generatorContext.generatorDispatch({ type: 'SET_STEP_TO_GAME' })}
				type='button'
			>
				Get Started
			</Button>
		</InnerWrapper>
	) : null;
};

export default Intro;
