import React, { useContext } from 'react';

// context
import GeneratorContext from '../../context/generatorContext';

// styled components
import { Button, InnerWrapper, ReminderText, SubHeading } from '../../styles/lib';
import { TagList, Tag } from './styles';

// data
import vaultHunters from '../../data/vaultHunters';

// constants
import { STEP_VAULT_HUNTER } from '../../constants/constants';

// utils
import getRandomArrayIndex from '../../utils/getRandomArrayIndex';

const VaultHunter = () => {
	const generatorContext = useContext(GeneratorContext);

	const matchingVaultHunters = vaultHunters.filter(
		(hunter) => hunter.game === generatorContext.generatorState.selectedGame
	);

	return generatorContext.generatorState.currentStep === STEP_VAULT_HUNTER ? (
		<InnerWrapper>
			<SubHeading>Select Your Vault Hunter</SubHeading>

			<ReminderText>
				One of the following vault hunters below will be chosen at random for you.
			</ReminderText>

			<TagList>
				{matchingVaultHunters.map(({ name }) => (
					<Tag key={name}>{name}</Tag>
				))}
			</TagList>

			<Button
				mode='step'
				onClick={() =>
					generatorContext.generatorDispatch({
						type: 'SELECT_VAULT_HUNTER',
						payload: matchingVaultHunters[getRandomArrayIndex(matchingVaultHunters)].name
					})
				}
				type='button'
			>
				Select Vault Hunter
			</Button>
		</InnerWrapper>
	) : null;
};

export default VaultHunter;
