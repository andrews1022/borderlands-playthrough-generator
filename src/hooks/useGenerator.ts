import { useContext } from "react";
import type { Dispatch } from "react";

import GeneratorContext from "../context/GeneratorContext";
import type { GeneratorActions, GeneratorState } from "../reducers/generatorReducer";

type UseGeneratorReturn = [GeneratorState, Dispatch<GeneratorActions>];

const useGenerator = (): UseGeneratorReturn => {
  const { generatorDispatch: dispatch, generatorState: state } = useContext(GeneratorContext);

  return [state, dispatch];
};

export default useGenerator;
