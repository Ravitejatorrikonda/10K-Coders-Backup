// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Features from './Component/Features';
import Pricing from './Component/Pricing';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/Features' element={<Features/>}/>
          <Route path='/Pricing' element={<Pricing/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
