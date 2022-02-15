import React, { useContext } from 'react';

// context
import GeneratorContext from '../../context/GeneratorContext';

// components
import Card from '../Card';

// styled components
import * as S from './styles';
import { Heading } from '../UI/Heading';
import { InnerWrapper } from '../UI/InnerWrapper';
import { ReminderText } from '../UI/ReminderText';

// data
import { options } from '../../data/options';

// constants
import { STEP_RUN_TYPE } from '../../constants/steps';

const RunType = () => {
	const generatorContext = useContext(GeneratorContext);

	// destructure state fields for cleaner jsx
	const { currentStep } = generatorContext.generatorState;

	return currentStep === STEP_RUN_TYPE ? (
		<InnerWrapper>
			<Heading as='h2' size='medium'>
				Select Your Run Type
			</Heading>

			<ReminderText>
				A modifier will be chosen at random based on your selection below.
			</ReminderText>

			<S.Row>
				{options.map((option) => (
					<Card key={option.name} option={option} />
				))}
			</S.Row>
		</InnerWrapper>
	) : null;
};

export default RunType;
