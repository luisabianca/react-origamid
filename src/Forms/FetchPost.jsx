import React, { useState } from 'react'
import './style.css';

const FetchPost = () => {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  }

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setForm({ ...form, [id]: value })
  }

  return (
    <div>
      <h1>Formulário</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-item'>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            name="nome"
            id="nome"
            value={form.nome}
            onChange={handleChange}
          />
        </div>

        <button>Enviar</button>
      </form>
    </div>
  )
}

export default FetchPost