import React from 'react';

const Events = () => {
  
  return (
    <button onClick={({ target }) => target.classList.toggle('ativa')}>
      Ativar
    </button>
  )

}

export default Events;
