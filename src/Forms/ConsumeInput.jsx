import { useState } from "react";
import DefaultInput from "./DefaultInput";

const ConsumeInput = () => {
  const [nome, setNome] = useState('');

  return (
    <form>
      <DefaultInput
        label="Nome"
        id="nome"
        type="text"
        value={nome}
        setValue={setNome}
      />
    </form>
  );
};

export default ConsumeInput;