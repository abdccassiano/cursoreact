import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

  const [linea1, setLinea1] = useState('Hola mundo');

  return (
    <div className="App">

      <select>
        <option value="fire">Casa en llamas</option>
        <option value="history">Futuramas</option>
        <option value="history">History channel</option>
        <option value="matriz">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart Guy</option>
      </select><br />

      <input type="text" placeholder="Linea 1" /><br />
      <input type="text" placeholder="Linea 2" /><br />
      <button>Exportar</button>

      <div>
        <span>{linea1}</span><br />
        <span>Linea 2</span>
        <img src="" />
      </div>
      
    </div>
  );
}

export default App;
