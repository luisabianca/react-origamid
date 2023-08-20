import React, { useState } from 'react'

const Inputs = () => {
  const [ name, setName ] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome:</label>
      <input
       type="text"
       id='nome'
       name='nome'
       value={name}
       onChange={({target}) => setName(target.value)}
      />

      <p>{name}</p>
      <button>Enviar</button>
    </form>
  )
}

export default Inputs;