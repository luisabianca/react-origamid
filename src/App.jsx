import React, { useState } from 'react';
import Header from './Header';
import Home from './Home';
import Produtos from './Produtos';
import ButtonModal from './ButtonModal';
import Modal from './Modal';

const App = () => {
  const [ modal, setModal ] = useState(false);
  const { pathname } = window.location;

  let Component;
  if (pathname === '/produtos') {
    Component = Produtos;
  } else {
    Component = Home;
  }

  return (
    <section>
      <Header />
      <div>
        <div>{modal ? "Modal aberto" : "Modal fechado"}</div>
        <Modal modal={modal} setModal={setModal}/>
        <ButtonModal setModal={setModal} />
      </div>
      <Component />
    </section>
  );
};

export default App;