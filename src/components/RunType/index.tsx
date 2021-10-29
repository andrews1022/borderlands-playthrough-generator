import React, { useContext } from 'react';

// styled components
import { Button, InnerWrapper, ReminderText, SubHeading } from '../../styles/lib';
import { Card, CardBottom, CardCopy, CardHeading, CardIcon, CardList, CardTop } from './styles';

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
										onClick={() => ctx.dispatch({ type: 'SELECT_RUN_TYPE', payload: name })}
										type='button'
									>
										Select
									</Button>
								</CardBottom>
							</Card>
						))}
					</CardList>
				</InnerWrapper>
			) : null}
		</>
	);
};

export default RunType;
