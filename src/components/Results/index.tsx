import React, { useContext } from 'react';

// styled components
import { Result, ResultsWrapper } from './styles';
import { Button } from '../UI/Button';
import { Copy } from '../UI/Copy';
import { Heading } from '../UI/Heading';
import { InnerWrapper } from '../UI/InnerWrapper';

// context
import GeneratorContext from '../../context/generatorContext';

// constants
import { STEP_RESULTS } from '../../constants/steps';

const Results = () => {
	const generatorContext = useContext(GeneratorContext);

	// destructure state fields for cleaner jsx
	// eslint-disable-next-line operator-linebreak
	const { currentStep, modifierDescription, selectedGame, selectedModifier, selectedVaultHunter } =
		generatorContext.generatorState;

	// event functions
	const changeStepHandler = () => {
		generatorContext.generatorDispatch({ type: 'RESTART' });
	};

	return currentStep === STEP_RESULTS ? (
		<InnerWrapper>
			<Heading as='h2' size='medium'>
				Here are the results!
			</Heading>

			<ResultsWrapper>
				<Copy>
					For your next playthrough of <Result>{selectedGame}</Result>, you&apos;ll play as{' '}
					<Result>{selectedVaultHunter}</Result> with{' '}
					<Result>
						{modifierDescription ? `the ${selectedModifier} modifier` : `${selectedModifier}`}
					</Result>
					!
				</Copy>

				{modifierDescription ? (
					<Copy>
						The <Result>{selectedModifier}</Result> modifier is when you {modifierDescription}.
					</Copy>
				) : null}
			</ResultsWrapper>

			<Button mode='primary' onClick={changeStepHandler} type='button'>
				Start Over?
			</Button>
		</InnerWrapper>
	) : null;
};

export default Results;
