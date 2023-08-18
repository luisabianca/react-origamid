import React, { useEffect, useRef, useState } from 'react'

const UseRefStudy = () => {
  const [ comentarios, setComentarios ] = useState([]);
  const [ input, setInput ] = useState('');
  const inputElement = useRef();

  useEffect(() => {
    
  },[])

  const handleClick = () => {
    setComentarios([...comentarios, input]);
    setInput('');
    inputElement.current.focus();
  }

  return (
    <div>
      <ul>
        {
          comentarios.map((comentario) => (<li key={comentario}>{comentario}</li>))
        }
      </ul>
      <input type='text' value={input} ref={inputElement} onChange={({target}) => setInput(target.value)} />
      <br />
      <button onClick={handleClick}>Enviar</button>
    </div>
  )
}

export default UseRefStudy;