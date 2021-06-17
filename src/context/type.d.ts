interface Todo {
  id: number
  title: string
  status: boolean
}

type ContextType = {
    todos: Todo[];
    filter:string;
    saveTodo: (todo: Todo) => void;
    removeTodo: (id:number) => void;
    updateTodo:(id:number) => void;
    filterTodo:(filter:string) => void;
  };