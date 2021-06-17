import React from 'react';
import { MainWrapper, Container,StyledImage  } from './components/Styled.components';
import "./App.css"
import TodosProvider from "./context/TodoContext";
import Todos from "./components/Todos"
import DropdownList from './components/DropdownList';



import InputComponent from './components/InputComponent';

const  App = () => {
  return (
    <TodosProvider>
      <Container>
      
      <MainWrapper >
        <InputComponent/>
        <DropdownList/>
      </MainWrapper>
      
      <Todos/>

      

      </Container>
    </TodosProvider>
   
   
  );
}

export default App;
