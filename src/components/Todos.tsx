import React, { useContext } from "react";
import { TodosContext } from "../context/TodoContext";
import {  TodoContainer } from "./Styled.components";

 const Todos = () => {
  const { todos, filter } = useContext(TodosContext) as ContextType;
  const { removeTodo, updateTodo } = useContext(TodosContext) as ContextType
  const [todoList , setTodoList] = React.useState(todos)

  const onCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateTodo(parseInt(event.currentTarget.id))
    console.log(parseInt(event.currentTarget.id))
    return event.currentTarget.checked
  }
  const onDelete = (e: React.MouseEvent<HTMLButtonElement> ) => {
    
    removeTodo(parseInt(e.currentTarget.id))
    
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
    <div>
      <TodoContainer>
        {
          
            todoList.map((todo:Todo) => (
              <div style={{display:"flex", margin:"20px"}} key={todo.id}>
              <div  style={{backgroundColor:todo.status ? "green":"red"}}>{todo.title}</div>
              <input type="checkbox" checked={todo.status ? true:false} onChange={onCheck} id={todo.id.toString()}/>
              <button onClick={onDelete} id={todo.id.toString()}>delete</button>
              </div>
            ))
          

        }
      </TodoContainer>
    </div>
  );
};

export default Todos;