import React, { useState } from 'react'

const Inputs = () => {
  const [ form, setForm ] = useState({
    name: '',
    email: ''
  });

  const handleSubmit = (event) => {
    // event.preventDefault();
    console.log(event);
  }

  const handleChange = ({target}) => {
    const { id, value } = target;
    setForm({...form, [id]: value})
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nome:</label>
      <input
       type="text"
       id='name'
       name='name'
       value={form.name}
       onChange={handleChange}
      />
      <br />

      <label htmlFor="email">Email:</label>
      <input
       type="email"
       id='email'
       name='email'
       value={form.email}
       onChange={handleChange}
      />
      <br />
      <button>Enviar</button>
    </form>
  )
}

export default Inputs;