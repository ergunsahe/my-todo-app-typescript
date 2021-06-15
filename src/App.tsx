import React from 'react';
import { MainWrapper } from './components/Styled.components';
import "./App.css"
import TodosProvider from "./context/TodoContext";
import Todos from "./components/Todos"



import InputComponent from './components/InputComponent';

const  App = () => {
  return (
    <TodosProvider>
      <MainWrapper >
        <InputComponent/>
      </MainWrapper>
      <Todos/>
    </TodosProvider>
   
   
  );
}

export default App;
