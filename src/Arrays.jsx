import React from 'react';

const Arrays = () => {

  const myFavorites = [
    {nome: "Desperate Housewives", ano: 2004}, 
    {nome: "Grey's Anatomy", ano: 2005},
    {nome: "Mulheres de Areia", ano: 1993}, 
    {nome: "Tieta", ano: 1989}, 
    {nome: "Anjo Mau", ano: 1997}
  ]

  return (
    <>
      <ul>
        {myFavorites.map(({ nome, ano }) => (
          <li key={nome}>
            {nome} , {ano}
          </li>
        ))}
      </ul>
    </>
  )

}

export default Arrays;
