import React, { useContext } from 'react';

// context
import GeneratorContext from '../../context/generatorContext';

// styled components
import { Button, InnerWrapper, ReminderText, SubHeading } from '../../styles/lib';
import { Card, CardBottom, CardCopy, CardHeading, CardIcon, CardList, CardTop } from './styles';

// data
import { options } from '../../data/options';

// constants
import { STEP_RUN_TYPE } from '../../constants/constants';

const RunType = () => {
	const generatorContext = useContext(GeneratorContext);

	return generatorContext.generatorState.currentStep === STEP_RUN_TYPE ? (
		<InnerWrapper>
			<SubHeading>Select Your Run Type</SubHeading>
			<ReminderText>
				A modifier will be chosen at random based on your selection below.
			</ReminderText>

			<CardList>
				{options.map(({ name, description, icon }) => (
					<Card key={name}>
						<CardTop>
							<CardIcon icon={icon} size='3x' />
							<CardHeading>{name}</CardHeading>
						</CardTop>

						<CardBottom>
							<CardCopy>
								{name === 'Allegiance' ? 'An' : 'A'} {name} run {description}.
							</CardCopy>

							<Button
								mode='step'
								onClick={() =>
									generatorContext.generatorDispatch({ type: 'SELECT_RUN_TYPE', payload: name })
								}
								type='button'
							>
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
