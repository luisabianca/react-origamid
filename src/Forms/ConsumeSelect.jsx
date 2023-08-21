import React, { useState } from "react";

const ConsumeSelect = () => {
  const [produto, setProduto] = useState('');

  return (
    <form>
      <ConsumeSelect
        options={['Notebook', 'Smartphone', 'Tablet']}
        value={produto}
        setValue={setProduto}
      />
    </form>
  );
};

export default ConsumeSelect;