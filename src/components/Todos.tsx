import React, { useContext } from "react";
import { TodosContext } from "../context/TodoContext";

 const Todos = () => {
  const { todos } = useContext(TodosContext) as ContextType;
  const { removeTodo, updateTodo } = useContext(TodosContext) as ContextType

  const onCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateTodo(parseInt(event.currentTarget.id))
    console.log(parseInt(event.currentTarget.id))
    return event.currentTarget.checked
  }
  const onDelete = (e: React.MouseEvent<HTMLButtonElement> ) => {
    
    removeTodo(parseInt(e.currentTarget.id))
    
  }
  return (
    <div>
      <div>
        {todos.map((todo:Todo) => (
          <div style={{display:"flex"}} key={todo.id}>
          <div  style={{backgroundColor:todo.status ? "green":"red"}}>{todo.title}</div>
          <input type="checkbox"  onChange={onCheck} id={todo.id.toString()}/>
          <button onClick={onDelete} id={todo.id.toString()}>delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;