import React from 'react';

const App = () => {

  const luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
    ],
    ativa: true,
  };

  const mario = {
    cliente: 'Mario',
    idade: 31,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
      { nome: 'Guitarra', preco: 'R$ 3500' },
    ],
    ativa: false,
  };

  const dados = mario;

  const total = dados.compras
  .map((item) => Number(item.preco.replace('R$ ', '')))
  .reduce((a, b) => a + b);

  

  return (
    <>
      <p>Nome: {dados.cliente}</p>

      <p>Idade: {dados.idade}</p>

      <p>Situação: {
        dados.ativa == true ?
          <span style={{ color: "green" }}>Ativa</span>
          :
          <span style={{ color: "red" }}>Inativa</span>
      }
      </p>

      <p>Total gasto:
        R$ {total}
      </p>

      <p>{total > 8000 && "Ta rico ou irresponsável"}</p>
    </>
  )
}

export default App;
