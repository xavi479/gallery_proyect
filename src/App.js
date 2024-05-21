import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Campo from './components/Campo';
import Carrera from './components/Carrera';
import Corredor from './components/Corredor';
import Correr from './components/Correr';
import Images from './components/Images';
import Navigation from './components/Navigation';


function App() {
  return  (
    <Router>
      <div className='container'>
        <h1 id='title' className='text-center my-3'>Galería</h1>
      </div>
      <Routes>
        <Route path="/Campo" element={<Campo className= "imagen-size" />}/>
        <Route path="/Carrera" element={<Carrera className="imagen-size" />}/>
        <Route path="/Corredor" element={<Corredor className="imagen-size" />}/>
        <Route path="/Correr" element={<Correr className="imagen-size" />}/>
        <Route path="/Images" element={<Images className="imagen-size" />}/>
      </Routes>
      <Navigation />
    </Router>
  );  
}

export default App;
