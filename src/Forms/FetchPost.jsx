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

  const [response, setResponse] = React.useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then((response) => {
      setResponse(response);
    });
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

        <div className='form-item'>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className='form-item'>
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            name="senha"
            id="senha"
            value={form.senha}
            onChange={handleChange}
          />
        </div>

        <div className='form-item'>
          <label htmlFor="cep">cep:</label>
          <input
            type="text"
            name="cep"
            id="cep"
            value={form.cep}
            onChange={handleChange}
          />
        </div>

        <div className='form-item'>
          <label htmlFor="rua">rua:</label>
          <input
            type="text"
            name="rua"
            id="rua"
            value={form.rua}
            onChange={handleChange}
          />
        </div>

        <div className='form-item'>
          <label htmlFor="numero">número:</label>
          <input
            type="text"
            name="numero"
            id="numero"
            value={form.numero}
            onChange={handleChange}
          />
        </div>

        <div className='form-item'>
          <label htmlFor="bairro">Bairro:</label>
          <input
            type="text"
            name="bairro"
            id="bairro"
            value={form.bairro}
            onChange={handleChange}
          />
        </div>

        <div className='form-item'>
          <label htmlFor="cidade">Cidade:</label>
          <input
            type="text"
            name="cidade"
            id="cidade"
            value={form.cidade}
            onChange={handleChange}
          />
        </div>

        <div className='form-item'>
          <label htmlFor="estado">Estado:</label>
          <input
            type="text"
            name="estado"
            id="estado"
            value={form.estado}
            onChange={handleChange}
          />
        </div>

        <button>Enviar</button>
        {response && response.ok && <p>Usuário Criado</p>}
      </form>
    </div>
  )
}

export default FetchPost;