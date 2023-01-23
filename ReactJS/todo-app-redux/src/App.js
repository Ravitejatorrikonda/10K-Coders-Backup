import './App.css';
import { Form } from './Components/Form';
import { Todos } from './Components/Todos';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAll } from './Redux/todoapp/actions';
import { useState } from 'react';
function App() {
  const dispatch=useDispatch()
  const todos = useSelector((state) => state.operationsReducer)
  const [editFormVisibility,setEditFormVisibility]=useState(false);
  const [editTodo,setEditTodo]=useState('')
   const handleEdit=(todo)=>{
    setEditFormVisibility(true)
    setEditTodo(todo)
   }

   const cancleUpdate=()=>{
           setEditFormVisibility(false)
   }
  return (
    <div className="App">
      <br></br>
       <h2>TODO-APP USING REACT-REDUX</h2>  
       <Form editFormVisibility={editFormVisibility} editTodo={editTodo} cancleUpdate={cancleUpdate}/>
       <Todos editFormVisibility={editFormVisibility} handleEdit={handleEdit}/>
       {todos.length >1 && 
         <button className='btn btn-danger btn-md delete-all' onClick={()=>dispatch(deleteAll())}>Delete All</button>
       }
    </div>
  );
}

export default App;
