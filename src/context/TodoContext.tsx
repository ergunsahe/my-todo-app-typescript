import React, { createContext, useState, FC } from "react";





export const TodosContext = createContext<
ContextType | undefined
>(undefined);;

const TodosProvider: FC = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const saveTodo = (todo: Todo) => {
    setTodos([...todos, todo])
    
  }

  const removeTodo = (id: number) => {
    const selectedTodos= todos.filter((todo: Todo) => todo.id !== id )   
    setTodos(selectedTodos)
  }
  const updateTodo =(id: number) => {
    todos.filter((todo: Todo) => {
      if (todo.id === id) {
        todo.status = !todo.status
        setTodos([...todos])
      }
    })
    console.log(todos)
  }

  return (
    <TodosContext.Provider 
      value={{todos, saveTodo, removeTodo, updateTodo}}
    >
      {children}

    </TodosContext.Provider>
    
  );
};

export default TodosProvider;