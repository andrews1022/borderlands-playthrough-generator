import React, { useReducer } from 'react';

// components
import Footer from '../Footer';
import MasterGenerator from '../MasterGenerator';

// styled components
import AppWrapper from './styles';

// context
import GeneratorContext from '../../context/generatorContext';

// reducer
import { generatorReducer, initialState } from '../../reducer/generatorReducer';

const App = () => {
	const [state, dispatch] = useReducer(generatorReducer, initialState);

	return (
		<AppWrapper>
			<GeneratorContext.Provider value={{ state, dispatch }}>
				<MasterGenerator />
				<Footer />
			</GeneratorContext.Provider>
		</AppWrapper>
	);
};

export default App;
