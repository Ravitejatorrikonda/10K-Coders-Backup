// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const App=()=> {
const [results, setResults] = useState("");
const handleclick=(e)=>{
setResults(results.concat(e.target.name))
}
const equelsto=()=>{
setResults(eval(results).toString())
}
const clear=()=>{
setResults("")
}
const backspace=()=>{
setResults(results.slice(0,-1))
}

  return (
    <div>
    <div className="container">
      <form>
      <input type="text" value={results}/><br/>
      </form>
      <div className="keypad">
        
           <button onClick={clear}>Clear</button>
           <button onClick={backspace}>C</button>
           
           <button name='/' onClick={handleclick}>&divide;</button>
           <button name='9' onClick={handleclick}>9</button>
           <button name='8' onClick={handleclick}>8</button>
           <button name='7' onClick={handleclick}>7</button>
           <button name='*' onClick={handleclick}>&times;</button>
           <button name='6' onClick={handleclick}>6</button>
           <button name='5' onClick={handleclick}>5</button>
           <button name='4' onClick={handleclick}>4</button>
           <button name='-' onClick={handleclick}>&ndash;</button>
           <button name='3' onClick={handleclick}>3</button>
           <button name='2' onClick={handleclick}>2</button>
           <button name='1' onClick={handleclick}>1</button>
           <button name='+' onClick={handleclick}>+</button>
           <button name='0' onClick={handleclick}>0</button>
           <button name='.' onClick={handleclick}>.</button>

           <button onClick={equelsto}>=</button>
           </div>
      
    </div>
    </div>
  );
}

export default App;
