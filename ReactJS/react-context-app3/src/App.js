// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Login from './components/Login/Login';
import Main from './components/Main';
import { MyContextProvider } from './components/Mycontext';


function App() {
  const [Users, setUsers] = useState(["Raviteja","Nikhil","Karthik","sai"])
  return (
    <div className="App">
     <MyContextProvider value={Users}>
      <Main/>
     </MyContextProvider>
     <Login />
    
    {/* <Main allUsers={Users}/> */}
    </div>
  );
}

export default App;
