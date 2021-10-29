import React, { useContext } from 'react';

// styled components
import { Button, InnerWrapper, ReminderText, SubHeading } from '../../styles/lib';
import { TagList, Tag } from './styles';

// context
import GeneratorContext from '../../context/generatorContext';

// data
import { PHASE_VAULT_HUNTER } from '../../data/constants';
import vaultHunters from '../../data/vaultHunters';

// utils
import getRandomArrayIndex from '../../utils/getRandomArrayIndex';

const VaultHunter = () => {
	const ctx = useContext(GeneratorContext);

	const matchingVaultHunters = vaultHunters.filter(
		(hunter) => hunter.game === ctx?.state.selectedGame
	);

	return (
		<>
			{ctx?.state.currentPhase === PHASE_VAULT_HUNTER ? (
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
							ctx.dispatch({
								type: 'SELECT_VAULT_HUNTER',
								payload: matchingVaultHunters[getRandomArrayIndex(matchingVaultHunters)].name
							})
						}
						type='button'
					>
						Select Vault Hunter
					</Button>
				</InnerWrapper>
			) : null}
		</>
	);
};

export default VaultHunter;
