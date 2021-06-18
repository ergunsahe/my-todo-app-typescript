import React, {useContext} from 'react'
import { TodosContext } from "../context/TodoContext";

const DropdownList = () => {
    const { filterTodo } = useContext(TodosContext) as ContextType

    const onSelect = (event: React.ChangeEvent<HTMLSelectElement>) =>{
        filterTodo(event.currentTarget.value)
    }
    return (
        <div style={{alignSelf:'flex-start'}}>
            <select name="selectList" id="selectList"
                onChange={onSelect}
            
            >
              <option value="All">All</option>
              <option value="To do">To do</option>
              <option value="Done">Done</option>
            </select>
        </div>
    )
}

export default DropdownList
