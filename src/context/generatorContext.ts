import { createContext, Dispatch } from 'react';
import {
	GeneratorActions,
	GeneratorState,
	initialGeneratorState
} from '../reducer/generatorReducer';

type GeneratorContextType = {
	generatorState: GeneratorState;
	generatorDispatch: Dispatch<GeneratorActions>;
};

const GeneratorContext = createContext<GeneratorContextType>({
	generatorState: initialGeneratorState,
	generatorDispatch: () => null
});

export default GeneratorContext;
