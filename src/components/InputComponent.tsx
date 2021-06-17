import React, {useContext} from 'react'
import { Wrapper, StyledButton, StyledInput } from './Styled.components'
import { TodosContext } from "../context/TodoContext";

const InputComponent: React.FC = () => {
    // const [text, setText] = React.useState<string>()
    const [todo, setTodo] =React.useState<Todo>({id:0, title:"deneme", status:false})
    const { saveTodo } = useContext(TodosContext) as ContextType
    

    const onChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newTodo = {
            //this is not an unique id. It is created only for simulation
        id: Math.round(Math.random()) * 100,
        title: event.currentTarget.value,
        status: false,
      }
      setTodo(newTodo)
      
    }
    

    const onSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        
        saveTodo(todo)
    }
  
    return (
        <Wrapper>
            <StyledInput 
            // value={todo}
            type="text"
            name="todo"
            onChange={onChangeText}
            />
            <StyledButton onClick={onSubmit}>Add</StyledButton>
        </Wrapper>
    )
}

export default InputComponent
