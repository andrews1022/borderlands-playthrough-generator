import { useReducer } from "react";

// context
import GeneratorContext from "../../context/GeneratorContext";
import { generatorReducer, initialGeneratorState } from "../../reducers/generatorReducer";

// components
import Footer from "../Footer/Footer";
import MasterGenerator from "../MasterGenerator/MasterGenerator";

// styled components
import * as S from "./App.styles";

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
