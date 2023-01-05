// import logo from './logo.svg';
import './App.css';
import Navbar2 from './Component/Navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Component/Home';
import Features from './Component/Features';
import Pricing from './Component/Pricing';

function App() {
  return (
    <div className="App">
  <BrowserRouter>
  <Navbar2/>
  <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/Features' element={<Features/>}/>
              <Route path='/Pricing' element={<Pricing/>}/>
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
