import React, { createContext, useState, FC } from "react";





export const TodosContext = createContext<
ContextType | undefined
>(undefined);;

const TodosProvider: FC = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter]= useState<string>("All");

  const saveTodo = (todo: Todo) => {
    setTodos([...todos, todo])
    
  }

  const removeTodo = (id: string) => {
    const selectedTodos= todos.filter((todo: Todo) => todo.id !== id )   
    setTodos(selectedTodos)
  }
  const updateTodo =(id: string) => {
    todos.filter((todo: Todo) => {
      if (todo.id === id) {
        todo.status = !todo.status
        setTodos([...todos])
        
      }
      return null
    })
  }

  const filterTodo =(filter:string) =>{
    setFilter(filter)
  }

  return (
    <TodosContext.Provider 
      value={{todos, saveTodo, removeTodo, updateTodo, filterTodo, filter}}
    >
      {children}

    </TodosContext.Provider>
    
  );
};

export default TodosProvider;