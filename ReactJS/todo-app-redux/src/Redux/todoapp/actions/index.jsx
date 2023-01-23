export const ADD_TODO='ADD_TODO'
export const DELETE_ALL='DELETE_ALL'
export const DELETE_TODO='DELETE_TODO'
export const EDIT_TODO='EDIT_TODO'
export const UPDATE_CHECKBOX='UPDATE_CHECKBOX'
export const addTodo=(payload)=>{
    return {
        type:ADD_TODO,
        payload
    }
}

export const deleteAll=()=>{
    return{
        type:DELETE_ALL,

    }
}

export const deleteTodo=(payload)=>{
    return{
        type:DELETE_TODO,
         payload
    }
}

export const  handleEditSubmit=(payload)=>{
    return{
        type:EDIT_TODO,
       payload
    }
}
export const handleCheckbox=(payload)=>{
    return{
        type:UPDATE_CHECKBOX,
        payload
    }
}