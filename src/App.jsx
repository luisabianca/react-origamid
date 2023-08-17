import React, { useState } from 'react';
import Produto from './Produto';

const App = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [data, setData] = useState(null);

  const urlTablet = "https://ranekapi.origamid.dev/json/api/produto/tablet"
  const urlSmartphone = "https://ranekapi.origamid.dev/json/api/produto/smartphone"
  const urlNotebook = "https://ranekapi.origamid.dev/json/api/produto/notebook"

  const fetchData = async (url) => {
    try {
      setIsRunning("Carregando...");
      const response = await fetch(url);
      const responseJSON = await response.json();
      setData(responseJSON);
    } catch (erro) {
      console.log(erro);
    } finally {
      setIsRunning(false);
    }
  }


  return (
    <>
      <div>
        <button onClick={() => fetchData(urlTablet)}>Tablet</button>

        <button onClick={() => fetchData(urlSmartphone)} style={{ margin: "0 20px" }}>Smartphone</button>

        <button onClick={() => fetchData(urlNotebook)}>Notebook</button>
      </div>

      <div>
        <p>{isRunning}</p>
        {data && <Produto dados={data} />}
      </div>
    </>
  );
};

export default App;