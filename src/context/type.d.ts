interface Todo {
  id: string
  title: string
  status: boolean
}

type ContextType = {
    todos: Todo[];
    filter:string;
    saveTodo: (todo: Todo) => void;
    removeTodo: (id:string) => void;
    updateTodo:(id:string) => void;
    filterTodo:(filter:string) => void;
  };