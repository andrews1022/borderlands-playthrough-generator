import React, { createContext, useReducer } from 'react';

// components
import Footer from './components/Footer';
import MasterGenerator from './components/MasterGenerator';

// reducer
import {
	GeneratorActions,
	generatorReducer,
	GeneratorState,
	initialState
} from './reducer/generatorReducer';

interface AppContextInterface {
	state: GeneratorState;
	dispatch: React.Dispatch<GeneratorActions>;
}

const GeneratorContext = createContext<AppContextInterface | null>(null);

const App = () => {
	const [state, dispatch] = useReducer(generatorReducer, initialState);

	return (
		<div className='App'>
			<GeneratorContext.Provider value={{ state, dispatch }}>
				<MasterGenerator />
				<Footer />
			</GeneratorContext.Provider>
		</div>
	);
};

export default App;
