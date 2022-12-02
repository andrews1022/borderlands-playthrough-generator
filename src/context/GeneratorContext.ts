import { createContext } from "react";
import type { Dispatch } from "react";

import { initialGeneratorState } from "../reducers/generatorReducer";
import type { GeneratorActions, GeneratorState } from "../reducers/generatorReducer";

interface GeneratorContextType {
  generatorState: GeneratorState;
  generatorDispatch: Dispatch<GeneratorActions>;
}

const GeneratorContext = createContext<GeneratorContextType>({
  generatorState: initialGeneratorState,
  generatorDispatch: () => null,
});

export default GeneratorContext;
