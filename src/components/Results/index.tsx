import React, { useContext } from 'react';

// styled components
import { Button, Copy, InnerWrapper, SubHeading } from '../../styles/lib';
import { Result, ResultsWrapper } from './styles';

// context
import GeneratorContext from '../../context/generatorContext';

// constants
import { STEP_RESULTS } from '../../constants/constants';

const Results = () => {
	const generatorContext = useContext(GeneratorContext);

	return generatorContext.generatorState.currentStep === STEP_RESULTS ? (
		<InnerWrapper>
			<SubHeading>Here are the results!</SubHeading>

			<ResultsWrapper>
				<Copy>
					For your next playthrough of{' '}
					<Result>{generatorContext.generatorState.selectedGame}</Result>, you&apos;ll play as{' '}
					<Result>{generatorContext.generatorState.selectedVaultHunter}</Result> with{' '}
					<Result>
						{generatorContext.generatorState.modifierDescription
							? `the ${generatorContext.generatorState.selectedModifier} modifier`
							: `${generatorContext.generatorState.selectedModifier}`}
					</Result>
					!
				</Copy>

				{generatorContext.generatorState.modifierDescription ? (
					<Copy>
						The <Result>{generatorContext.generatorState.selectedModifier}</Result> modifier is when
						you {generatorContext.generatorState.modifierDescription}.
					</Copy>
				) : null}
			</ResultsWrapper>

			<Button
				mode='boundary'
				onClick={() => generatorContext.generatorDispatch({ type: 'RESTART' })}
				type='button'
			>
				Start Over?
			</Button>
		</InnerWrapper>
	) : null;
};

export default Results;
