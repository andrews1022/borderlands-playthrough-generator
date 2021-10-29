import React, { useContext } from 'react';

// styled components
import { Button, Copy, InnerWrapper, SubHeading } from '../../styles/lib';
import { Result, ResultsWrapper } from './styles';

// context
import GeneratorContext from '../../context/generatorContext';

// data
import { PHASE_RESULTS } from '../../data/constants';

const Results = () => {
	const ctx = useContext(GeneratorContext);

	return (
		<>
			{ctx?.state.currentPhase === PHASE_RESULTS ? (
				<InnerWrapper>
					<SubHeading>Here are the results!</SubHeading>

					<ResultsWrapper>
						<Copy>
							For your next playthrough of <Result>{ctx.state.selectedGame}</Result>, you&apos;ll
							play as <Result>{ctx.state.selectedVaultHunter}</Result> with{' '}
							<Result>
								{ctx.state.modifierDescription
									? `the ${ctx.state.selectedModifier} modifier`
									: `${ctx.state.selectedModifier}`}
							</Result>
							!
						</Copy>

						{ctx.state.modifierDescription ? (
							<Copy>
								The <Result>{ctx.state.selectedModifier}</Result> modifier is when you{' '}
								{ctx.state.modifierDescription}.
							</Copy>
						) : null}
					</ResultsWrapper>

					<Button mode='boundary' onClick={() => ctx.dispatch({ type: 'RESTART' })} type='button'>
						Start Over?
					</Button>
				</InnerWrapper>
			) : null}
		</>
	);
};

export default Results;
