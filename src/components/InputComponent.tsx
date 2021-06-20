import React, {useContext} from 'react'
import { Wrapper, StyledButton, StyledInput } from './Styled.components'
import { TodosContext } from "../context/TodoContext";
import uuid from "uuid"

const InputComponent: React.FC = () => {
    // const [text, setText] = React.useState<string>()
    const [todo, setTodo] =React.useState<Todo>({id:"", title:"", status:false})
    const { saveTodo } = useContext(TodosContext) as ContextType
    

    const onChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newTodo = {
            //this is not an unique id. It is created only for simulation
        id: uuid.v4() ,
        title: event.currentTarget.value,
        status: false,
      }
      setTodo(newTodo)
     
      
    }
    

    const onSubmit = (event: React.MouseEvent<HTMLButtonElement> ) => {
        
        if (todo.title === ""){
            alert("Please type someting...")
        }else{
            
            saveTodo(todo)
            setTodo({id:"", title:"", status:false})

        }
        
    }
    const onKeyboardSubmit = (event: React.KeyboardEvent<HTMLInputElement> ) => {
        
        if (event.key === "Enter"){
            saveTodo(todo)
            setTodo({id:"", title:"", status:false})
        }
        
    }
    
  
    return (
        <Wrapper>
            <StyledInput 
            placeholder="Type here a new Todo..."
            type="text"
            name="todo"
            onChange={onChangeText}
            value={todo.title}
            onKeyPress={onKeyboardSubmit}
            
            />
            <StyledButton  onClick={onSubmit}>Add</StyledButton>
        </Wrapper>
    )
}

export default InputComponent
