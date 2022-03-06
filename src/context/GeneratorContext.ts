import { createContext } from 'react';
import type { Dispatch } from 'react';

import { initialGeneratorState } from '../reducer/generatorReducer';
import type { GeneratorActions, GeneratorState } from '../reducer/generatorReducer';

type GeneratorContextType = {
  generatorState: GeneratorState;
  generatorDispatch: Dispatch<GeneratorActions>;
};

const GeneratorContext = createContext<GeneratorContextType>({
  generatorState: initialGeneratorState,
  generatorDispatch: () => null
});

export default GeneratorContext;
