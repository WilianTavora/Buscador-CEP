import {useState} from 'react'
import {FiSearch} from 'react-icons/fi'
import './App.css';
import api from "./services/api";

function App() {

  const [cep, setCep] = useState('')
  const [res, setRes] = useState('')
  async function cepatual(){
    if(cep === '') {
      alert('Digite algum CEP.')
    }
    try{
      const response = await api.get(`${cep}/json`);
      setRes(response.data)
      setCep('')

    }catch{
      alert('Ops erro ao buscar!!!')
      setCep('')
    }
  }
  return (
    
    <div className="container">
      <h1 className='title'>Buscador CEP</h1>
      <div className='inputb'>
        <input
        type='text'
        autoFocus
        placeholder='Digite seu CEP'
        value={cep}
        onChange={(e)=> setCep(e.target.value)}
        ></input>
        <button onClick={cepatual}>
          <FiSearch size={23} color='#000' className='search' />
        </button>
      </div>
      <div>
        <div className='info'>
          <h1 className='cep'>{res.cep}</h1>
          <span>{res.logradouro}</span>
          <span>{res.bairro}</span>
          <span>{res.localidade} {res.uf}</span>
        </div>
      </div>



    </div>
  );
}

export default App;
