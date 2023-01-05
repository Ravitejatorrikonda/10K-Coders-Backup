// import logo from './logo.svg';
import './App.css';
import Navbar1 from './Component/Navbar';
import { BrowserRouter, Route, Routes,} from 'react-router-dom';
import Home1 from './Component/Home';
import Features1 from './Component/Features';
import Pricing1 from './Component/Pricing';

function App() {
  return (
    <div className="App">
   
    <BrowserRouter>
    <Navbar1/>
    <Routes>
      <Route path='/' element={<Home1/>}/>
      <Route path='/Features' element={<Features1/>}/>
      <Route path='/Pricing' element={<Pricing1/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
