import React, { useReducer } from 'react';

// components
import Footer from '../Footer';
import MasterGenerator from '../MasterGenerator';

// styled components
import * as S from './styles';

// context
import GeneratorContext from '../../context/generatorContext';
import { generatorReducer, initialGeneratorState } from '../../reducer/generatorReducer';

const App = () => {
	const [state, dispatch] = useReducer(generatorReducer, initialGeneratorState);

	return (
		<S.Wrapper>
			<GeneratorContext.Provider value={{ generatorState: state, generatorDispatch: dispatch }}>
				<MasterGenerator />
				<Footer />
			</GeneratorContext.Provider>
		</S.Wrapper>
	);
};

export default App;
