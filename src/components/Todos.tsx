import React, { useContext } from "react";
import { TodosContext } from "../context/TodoContext";
import {  TodoContainer, StyledTodoWrapper, StyledTodo, StyledDelButton, StyledCheckInput } from "./Styled.components";

 const Todos = () => {
  const { todos, filter } = useContext(TodosContext) as ContextType;
  const { removeTodo, updateTodo } = useContext(TodosContext) as ContextType
  const [todoList , setTodoList] = React.useState(todos)

  const onCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateTodo(event.currentTarget.id)
   
    return event.currentTarget.checked
  }
  const onDelete = (e: React.MouseEvent<HTMLButtonElement> ) => {
    
    removeTodo(e.currentTarget.id)
    
  }

  React.useEffect(() =>{
    
    if (filter === "To do"){
      const selectedTodos = todos.filter((todo: Todo) => (todo.status === false));
      setTodoList(selectedTodos)
    }else if (filter === "Done") {
      const selectedTodos = todos.filter((todo: Todo) => (todo.status === true));
      setTodoList(selectedTodos)
    }else{
      setTodoList(todos)
    }
  }, [filter, todos])
  return (
    
      <TodoContainer>
        {
          
            todoList.map((todo:Todo) => (
              <StyledTodoWrapper  key={todo.id}>
                <StyledTodo  style={{
                  backgroundColor:todo.status ? 
                  "#66DE93"
                  :
                  "lightblue", 
                  textDecoration:todo.status ? 
                  "line-through":
                  ""}}
                >
                  {todo.title.length > 20 ? todo.title.substring(0,35) + "...":todo.title }
                </StyledTodo>
                <StyledCheckInput style={{}} type="checkbox" checked={todo.status ? true:false} onChange={onCheck} id={todo.id.toString()}/>
                <StyledDelButton  onClick={onDelete} id={todo.id.toString()}>Delete</StyledDelButton>
              </StyledTodoWrapper>
            ))
          

        }
      </TodoContainer>
    
  );
};

export default Todos;