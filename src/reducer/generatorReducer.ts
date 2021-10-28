// data
import {
	PHASE_DETERMINING_PLAYTHROUGH,
	PHASE_GAME,
	PHASE_RESULTS,
	PHASE_RUN_TYPE,
	PHASE_VAULT_HUNTER
} from '../data/constants';

export interface GeneratorState {
	currentPhase: string;
	modifierDescription: string;
	selectedGame: string;
	selectedModifier: string;
	selectedRunType: string;
	selectedVaultHunter: string;
}

export const initialState: GeneratorState = {
	currentPhase: 'intro',
	modifierDescription: '',
	selectedGame: '',
	selectedModifier: '',
	selectedRunType: '',
	selectedVaultHunter: ''
};

export type GeneratorActions =
	| { type: 'RESTART' }
	| { type: 'SELECT_GAME'; payload: string }
	| { type: 'SELECT_RUN_TYPE'; payload: string }
	| { type: 'SELECT_VAULT_HUNTER'; payload: string }
	| { type: 'SET_MODIFIER'; payload: { name: string; description: string } }
	| { type: 'SET_PHASE_TO_GAME' }
	| { type: 'SET_PHASE_TO_RESULTS' };

export const generatorReducer = (
	state: GeneratorState,
	action: GeneratorActions
): GeneratorState => {
	switch (action.type) {
		case 'RESTART': {
			return initialState;
		}

		case 'SELECT_GAME': {
			return {
				...state,
				currentPhase: PHASE_VAULT_HUNTER,
				selectedGame: action.payload
			};
		}

		case 'SELECT_RUN_TYPE': {
			return {
				...state,
				currentPhase: PHASE_DETERMINING_PLAYTHROUGH,
				selectedRunType: action.payload
			};
		}

		case 'SELECT_VAULT_HUNTER': {
			return {
				...state,
				currentPhase: PHASE_RUN_TYPE,
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

		case 'SET_PHASE_TO_GAME': {
			return {
				...state,
				currentPhase: PHASE_GAME
			};
		}

		case 'SET_PHASE_TO_RESULTS': {
			return {
				...state,
				currentPhase: PHASE_RESULTS
			};
		}

		default: {
			return state;
		}
	}
};
