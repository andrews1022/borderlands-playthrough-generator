import React, { createContext } from 'react';

// reducer types
import { GeneratorActions, GeneratorState } from '../reducer/generatorReducer';

interface AppContextInterface {
	state: GeneratorState;
	dispatch: React.Dispatch<GeneratorActions>;
}

const GeneratorContext = createContext<AppContextInterface | null>(null);

export default GeneratorContext;
