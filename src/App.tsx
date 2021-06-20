import React from 'react';
import { MainWrapper, Container } from './components/Styled.components';
import Todos from "./components/Todos"
import DropdownList from './components/DropdownList';




import InputComponent from './components/InputComponent';

const  App = () => {
  return (
   
      <Container>
        <MainWrapper >
          <InputComponent/>
          <DropdownList/>
        </MainWrapper>
        <Todos/>
      </Container>
  
   
   
  );
}

export default App;
