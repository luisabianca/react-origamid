import React, { useRef, useState } from 'react'

const UseRefStudyCarrinho = () => {
  const [ cart, setCart ] = useState(0);
  const [ alert, setAlert ] = useState(null);
  const timeoutRef = useRef();

  const handleClick = () => {
    setCart(cart + 1);
    setAlert('Item adicionado no carrinho');

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setAlert(null);
    }, 1000)
  }

  return (
    <div>
      <p>{alert}</p>
      <button onClick={handleClick}>Adicionar {cart}</button>
    </div>
  )
}

export default UseRefStudyCarrinho;