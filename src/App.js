import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Campo from './components/Campo';
import Carrera from './components/Carrera';
import Corredor from './components/Corredor';
import Correr from './components/Correr';
import Images from './components/Images';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Campo" element={Campo}/>
        <Route path="/Carrera" element={Carrera}/>
        <Route path="/Corredor" element={Corredor}/>
        <Route path="/Correr" element={Correr}/>
        <Route path="/Images" element={Images}/>
      </Routes>
      <Navigation />
    </Router>
  );  
}

export default App;
