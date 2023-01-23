import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Icon} from 'react-icons-kit'
import {trash2} from 'react-icons-kit/feather/trash2'
import {edit} from 'react-icons-kit/feather/edit'
import { deleteTodo, handleCheckbox } from '../Redux/todoapp/actions'
export const Todos = ({editFormVisibility,handleEdit}) => {
    const todos = useSelector((state) => state.operationsReducer)
    console.log(todos);
    const dispatch=useDispatch()
    return todos.map((todo) => (
        <div key={todo.id} className="todo-box">
            <div className="content">
                {editFormVisibility===false&&<input type="checkbox" className='check' checked={todo.completed} 
                onChange={()=>dispatch(handleCheckbox(todo.id))}/>}
            <p style={todo.completed === true ? { textDecoration: "line-through" } : { textDecoration: "none" }}>
                {todo.todo}
            </p>
            </div>
            <div className="actions-box">
              {editFormVisibility===false&&
              <>
               <span onClick={()=>handleEdit(todo)}><Icon icon={edit}/></span>
               <span onClick={()=>dispatch(deleteTodo(todo.id))}><Icon icon={trash2}/></span>
              </>}
           </div>
        </div>
    ))
}
