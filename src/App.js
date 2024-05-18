import './App.css';
import { browserRouter as Router, Router, Router } from 'react-router-dom';
import Campo from './components/Campo.JSX';
import Carrera from './components/Carrera';
import Corredor from './components/corredor';
import correr from './components/correr';
import images from './components/images';
function App() {
  return (
    <Router>
      <Router>
        <Router path="/Campo" element={Campo}/>
        <Router path="/Campo" element={Carrera}/>
        <Router path="/Campo" element={Corredor}/>
        <Router path="/Campo" element={correr}/>
        <Router path="/Campo" element={images}/>
      </Router>
    </Router>
  );  
}

export default App;
