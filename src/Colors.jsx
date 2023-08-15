import React from 'react';

const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];

const Colors = () => {
  const dados = produtos.filter(({ preco }) => Number(preco.replace("R$ ", "")) > 1500)
  console.log(dados)

  return (
    <section>
      {dados.map(({ id, nome, preco, cores }) => (
        <div key={id}>
          <h1>{nome}</h1>
          <p>Preço: {preco}</p>
          <p>cores:</p>
          <ul>{cores.map((item) => 
            (<li key={item} style={{backgroundColor: item, color: "#fff"}}>{item}</li>)
          )}</ul>
        </div>
      ))}

    </section>
  )

}

export default Colors;
