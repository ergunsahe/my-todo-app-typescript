import React, { useContext } from "react";
import { TodosContext } from "../context/TodoContext";

 const Todos = () => {
  const { todos } = useContext(TodosContext);

  return (
    <div>
      <div>
        {todos.map((todo, i) => (
          <div key={i}>{todo}</div>
        ))}
      </div>
    </div>
  );
};

export default Todos;