import React, { useState } from 'react'

const Inputs = () => {
  const [ name, setName ] = useState('');

  return (
    <form>
      <label htmlFor="nome">Nome:</label>
      <input
       type="text"
       id='nome'
       value={name}
       onChange={({target}) => setName(target.value)}
      />

      <p>{name}</p>
    </form>
  )
}

export default Inputs;