// step constants
import {
	STEP_DETERMINE_PLAYTHROUGH,
	STEP_GAME,
	STEP_INTRO,
	STEP_RESULTS,
	STEP_RUN_TYPE,
	STEP_VAULT_HUNTER
} from '../constants/steps';

export interface GeneratorState {
	currentStep: string;
	modifierDescription: string | null;
	selectedGame: string;
	selectedModifier: string;
	selectedRunType: string;
	selectedVaultHunter: string;
}

export type GeneratorActions =
	| { type: 'RESTART' }
	| { type: 'SELECT_GAME'; payload: string }
	| { type: 'SELECT_RUN_TYPE'; payload: string }
	| { type: 'SELECT_VAULT_HUNTER'; payload: string }
	| { type: 'SET_MODIFIER'; payload: { name: string; description: string | null } }
	| { type: 'SET_STEP_TO_GAME' }
	| { type: 'SET_STEP_TO_RESULTS' };

export const initialGeneratorState: GeneratorState = {
	currentStep: STEP_INTRO,
	modifierDescription: '',
	selectedGame: '',
	selectedModifier: '',
	selectedRunType: '',
	selectedVaultHunter: ''
};

export const generatorReducer = (
	state: GeneratorState = initialGeneratorState,
	action: GeneratorActions
): GeneratorState => {
	switch (action.type) {
		case 'RESTART': {
			return initialGeneratorState;
		}

		case 'SELECT_GAME': {
			return {
				...state,
				currentStep: STEP_VAULT_HUNTER,
				selectedGame: action.payload
			};
		}

		case 'SELECT_RUN_TYPE': {
			return {
				...state,
				currentStep: STEP_DETERMINE_PLAYTHROUGH,
				selectedRunType: action.payload
			};
		}

		case 'SELECT_VAULT_HUNTER': {
			return {
				...state,
				currentStep: STEP_RUN_TYPE,
				selectedVaultHunter: action.payload
			};
		}

		case 'SET_MODIFIER': {
			return {
				...state,
				selectedModifier: action.payload.name,
				modifierDescription: action.payload.description
			};
		}

		case 'SET_STEP_TO_GAME': {
			return {
				...state,
				currentStep: STEP_GAME
			};
		}

		case 'SET_STEP_TO_RESULTS': {
			return {
				...state,
				currentStep: STEP_RESULTS
			};
		}

		default: {
			return state;
		}
	}
};
