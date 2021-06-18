import React from 'react';
import { MainWrapper, Container } from './components/Styled.components';
import TodosProvider from "./context/TodoContext";
import Todos from "./components/Todos"
import DropdownList from './components/DropdownList';




import InputComponent from './components/InputComponent';

const  Main = () => {
  return (
    <div style={{backgroundImage:`url('https://images.unsplash.com/photo-1487088678257-3a541e6e3922?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzE1fHxibG9nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')`, overflow:'hidden', backgroundRepeat: 'no-repeat', backgroundSize:'cover'}}>
    <TodosProvider >
      
      <Container>
        <MainWrapper >
          <InputComponent/>
          <DropdownList/>
        </MainWrapper>
        <Todos/>
      </Container>
    </TodosProvider>
    </div>
   
   
  );
}

export default Main;