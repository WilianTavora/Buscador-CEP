import react from 'react'
import {FiSearch} from 'react-icons/fi'
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Buscador CEP</h1>
      <input
      type='text'
      placeholder='Digite seu CEP'
      ></input>
      <button><FiSearch /></button>



    </div>
  );
}

export default App;
