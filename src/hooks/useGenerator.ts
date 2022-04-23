import { useContext } from 'react';
import type { Dispatch } from 'react';

import GeneratorContext from '../context/GeneratorContext';
import type { GeneratorActions, GeneratorState } from '../reducers/generatorReducer';

const useGenerator = (): [GeneratorState, Dispatch<GeneratorActions>] => {
  const { generatorDispatch: dispatch, generatorState: state } = useContext(GeneratorContext);

  return [state, dispatch];
};

export default useGenerator;
