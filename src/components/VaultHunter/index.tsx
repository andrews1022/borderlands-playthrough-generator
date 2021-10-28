import React, { useContext } from 'react';

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
				<div>
					<h2>Select Your Vault Hunter</h2>
					<p>One of the following vault hunters below will be chosen at random for you.</p>

					<ul>
						{matchingVaultHunters.map(({ name }) => (
							<li key={name}>{name}</li>
						))}
					</ul>

					<button
						onClick={() =>
							ctx.dispatch({
								type: 'SELECT_VAULT_HUNTER',
								payload: matchingVaultHunters[getRandomArrayIndex(matchingVaultHunters)].name
							})
						}
						type='button'
					>
						Select Vault Hunter
					</button>
				</div>
			) : null}
		</>
	);
};

export default VaultHunter;
