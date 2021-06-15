import React, {useContext} from 'react'
import { Wrapper, StyledButton, StyledInput } from './Styled.components'
import { TodosContext } from "../context/TodoContext";

const InputComponent: React.FC = () => {
    const [todo, setTodo] =React.useState<string>("")
    const { addTodo } = useContext(TodosContext);
    

    const onChangeText = (
        event: React.ChangeEvent<HTMLInputElement>,
    ): void => setTodo(event.target.value)
    

    const onSubmit = (event: React.MouseEvent<HTMLElement>) => {
        addTodo(todo)
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
