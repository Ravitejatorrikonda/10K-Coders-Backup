import { ADD_TODO, DELETE_ALL, DELETE_TODO, EDIT_TODO, UPDATE_CHECKBOX } from "../actions"

const initialState=[]
export const operationsReducer=(state=initialState,action)=>{
        switch (action.type) {
             case ADD_TODO:
                return [...state,action.payload];

               case DELETE_ALL:
                return [];

                case DELETE_TODO:
                    const filteredTodo=state.filter((todo)=>todo.id!==action.payload)
                    return filteredTodo

                case EDIT_TODO:
                    let data=action.payload;
                    const updateArray=[];
                    // state.map((item)=>{
                        state.map((item)=>{
                        
                            if(item.id===data.id){
                                item.id=data.id;
                                item.todo=data.todo;
                                item.completed=data.completed
                                
                            }
                            updateArray.push(item)
                        })
                    
                        
                    
                    return updateArray;

                    case UPDATE_CHECKBOX:
                        let todoArray=[];
                        state.map((item)=>{
                            if(item.id===action.payload){
                                item.completed = !item.completed
                            }
                            todoArray.push(item)
                        })
                        return todoArray;
            default:
                return state
        }
}