import React, { useContext } from 'react';

// context
import GeneratorContext from '../../context/generatorContext';

// styled components
import { TagList, Tag } from './styles';
import { Button } from '../UI/Button';
import { Heading } from '../UI/Heading';
import { InnerWrapper } from '../UI/InnerWrapper';
import { ReminderText } from '../UI/ReminderText';

// data
import vaultHunters from '../../data/vaultHunters';

// constants
import { STEP_VAULT_HUNTER } from '../../constants/steps';

// utils
import { getRandomArrayIndex } from '../../utils/getRandomArrayIndex';

const VaultHunter = () => {
	const generatorContext = useContext(GeneratorContext);

	// destructure state fields for cleaner jsx
	const { currentStep, selectedGame } = generatorContext.generatorState;

	// reusable var
	const matchingVaultHunters = vaultHunters.filter((hunter) => hunter.game === selectedGame);

	// event functions
	const changeStepHandler = () => {
		generatorContext.generatorDispatch({
			type: 'SELECT_VAULT_HUNTER',
			payload: matchingVaultHunters[getRandomArrayIndex(matchingVaultHunters)].name
		});
	};

	return currentStep === STEP_VAULT_HUNTER ? (
		<InnerWrapper>
			<Heading as='h2' size='medium'>
				Select Your Vault Hunter
			</Heading>

			<ReminderText>
				One of the following vault hunters below will be chosen at random for you.
			</ReminderText>

			<TagList>
				{matchingVaultHunters.map((vaultHunter) => (
					<Tag key={vaultHunter.name}>{vaultHunter.name}</Tag>
				))}
			</TagList>

			<Button mode='secondary' onClick={changeStepHandler} type='button'>
				Select Vault Hunter
			</Button>
		</InnerWrapper>
	) : null;
};

export default VaultHunter;
