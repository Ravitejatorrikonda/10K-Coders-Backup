import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import  {Provider}  from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const store={};
//default state
const defaultState={
  users:["Ravi","Gayathri","karthik","Kusuma"]
}

//Reducer we can write all bussiness logic 
const reducer=(state=defaultState, action)=>{
switch (action) {
  case "addUser":
    var newUser=[...state.users]
newUser.push(action.payLoad)
return{
  ...state,users:newUser
}
  default:
    return state
}
//Create a user
//Read a user
//Update a user
//Delete a user
}
export const handileadd=()=>{
  return {
    type:"addUser",
    payLoad:"Nikhil"
  }
}

//Creating "STORE"
const store=createStore(reducer);
 console.log(store.getState());

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
