import React, { useState } from 'react';
import Header from './Header';
import Home from './Home';
import Produtos from './Produtos';
import ButtonModal from './ButtonModal';
import Modal from './Modal';

const App = () => {
  const [ modal, setModal ] = useState(false);
  const [ contar, setContar ] = useState(1);
  const [ items, setItems ] = useState(['Item 1'])
  const { pathname } = window.location;

  let Component;
  if (pathname === '/produtos') {
    Component = Produtos;
  } else {
    Component = Home;
  }

  const handleClick = () => {
    setContar(contar + 1);
    setItems(() => [...items, 'Item ' + (contar + 1)])
  }

  return (
    <section>
      <Header />
      <div>
        {modal && 
          <Modal modal={modal} setModal={setModal}/>
        }
        <ButtonModal setModal={setModal} />
      </div>
      <Component />
      <div>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
        <button onClick={handleClick}>{contar}</button>
      </div>
    </section>
  );
};

export default App;