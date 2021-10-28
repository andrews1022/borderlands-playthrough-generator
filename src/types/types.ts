import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export type MainOption = {
	name: string;
	description: string;
	icon: IconDefinition;
};

export type AllegianceOption = {
	name: string;
	game: string;
};

export type RarityOption = {
	rarity: string;
	game: string;
};

export type MiscellaneousOption = {
	name: string;
	description: string;
};

export type VaultHunter = {
	name: string;
	game: string;
};
