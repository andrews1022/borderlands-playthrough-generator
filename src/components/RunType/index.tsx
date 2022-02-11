import React, { useContext } from 'react';

// context
import GeneratorContext from '../../context/generatorContext';

// styled components
import { Card, CardBottom, CardCopy, CardIcon, CardList, CardTop } from './styles';
import { Button } from '../UI/Button';
import { Heading } from '../UI/Heading';
import { InnerWrapper } from '../UI/InnerWrapper';
import { ReminderText } from '../UI/ReminderText';

// data
import { MainOption, options } from '../../data/options';

// constants
import { STEP_RUN_TYPE } from '../../constants/steps';

const RunType = () => {
	const generatorContext = useContext(GeneratorContext);

	// destructure state fields for cleaner jsx
	const { currentStep } = generatorContext.generatorState;

	// event functions
	const changeStepHandler = (option: MainOption) => {
		generatorContext.generatorDispatch({ type: 'SELECT_RUN_TYPE', payload: option.name });
	};

	return currentStep === STEP_RUN_TYPE ? (
		<InnerWrapper>
			<Heading as='h2' size='medium'>
				Select Your Run Type
			</Heading>

			<ReminderText>
				A modifier will be chosen at random based on your selection below.
			</ReminderText>

			<CardList>
				{options.map((option) => (
					<Card key={option.name}>
						<CardTop>
							<CardIcon icon={option.icon} size='3x' />
							<Heading as='h3' size='small'>
								{option.name}
							</Heading>
						</CardTop>

						<CardBottom>
							<CardCopy>
								{option.name === 'Allegiance' ? 'An' : 'A'} {option.name} run {option.description}.
							</CardCopy>

							<Button mode='secondary' onClick={() => changeStepHandler(option)} type='button'>
								Select
							</Button>
						</CardBottom>
					</Card>
				))}
			</CardList>
		</InnerWrapper>
	) : null;
};

export default RunType;
