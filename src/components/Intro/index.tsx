import React, { useContext } from 'react';

// context
import GeneratorContext from '../../context/generatorContext';

// styled components
import * as S from './styles';
import { Button } from '../UI/Button';
import { Heading } from '../UI/Heading';
import { InnerWrapper } from '../UI/InnerWrapper';

// constants
import { STEP_INTRO } from '../../constants/steps';

const Intro = () => {
	const generatorContext = useContext(GeneratorContext);

	// destructure state fields for cleaner jsx
	const { currentStep } = generatorContext.generatorState;

	// event functions
	const changeStepHandler = () => {
		generatorContext.generatorDispatch({ type: 'SET_STEP_TO_GAME' });
	};

	return currentStep === STEP_INTRO ? (
		<InnerWrapper>
			<Heading as='h1' size='large'>
				Borderlands Playthrough Generator
			</Heading>

			<S.Tagline>
				Looking for a fun and exciting new way to play through your favourite Borderlands game?{' '}
				<br />
				Use this app to generate it for you!
			</S.Tagline>

			<Button mode='primary' onClick={changeStepHandler} type='button'>
				Get Started
			</Button>
		</InnerWrapper>
	) : null;
};

export default Intro;
