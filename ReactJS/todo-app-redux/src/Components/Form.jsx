import React, { useEffect } from 'react'
import { useState } from 'react'
import {  useDispatch } from 'react-redux'
import { addTodo, handleEditSubmit } from '../Redux/todoapp/actions'

export const Form = ({editFormVisibility,editTodo,cancleUpdate}) => {
    const [todoValue,setTodoValue]=useState('')
    const  [editValue, setEditValue] = useState('');
    useEffect(() => {
         setEditValue(editTodo.todo)
    }, [editTodo]);
    const dispatch=useDispatch();
    const handleSubmit=(e)=>{
             e.preventDefault();
             let date= new Date();
             let time= date.getTime();  
             let todoObj={
                id:time,
                todo:todoValue,
                completed:false
             }
             setTodoValue('')
             dispatch(addTodo(todoObj))
    }
    const editSubmit=(e)=>{
        e.preventDefault();
        let editObj={
              id:editTodo.id,
                todo:editValue,
                completed:false
        }
        dispatch(handleEditSubmit(editObj))
      }
      return (
    
        <>
        {editFormVisibility===false?<form onSubmit={handleSubmit}>
            <label >Add your TodoList-items</label>
            <div className='container'>
            <input type="text"  classnName="form-control form-input" required 
            value={todoValue} onChange={(e)=>setTodoValue(e.target.value)}/>
            <button type='submit' className='btn btn-primary btn-md'>Add</button>
            </div>
        </form>:
        <form onSubmit={editSubmit}>
        <label >Update your TodoList-items</label>
        <div className='container'>
        <input type="text"  classnName="form-control form-input" required 
        value={editValue||""} onChange={(e)=>setEditValue(e.target.value)}/>
        <button type='submit' className='btn btn-primary btn-md'>Update</button>
        </div>
        <button className='btn btn-primary btn-md back-btn' onClick={cancleUpdate} >Back</button>
    </form>}
        </>
        
      )
    }
