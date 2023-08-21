import React, { useState } from 'react'

const TextArea = () => {
    const [mensagem, setMensagem] = useState('');
    return (
        <form>
            <label htmlFor="mensagem">Comentários:</label>
            <textarea
                id="mensagem"
                value={mensagem}
                rows="5"
                onChange={({ target }) => setMensagem(target.value)}
            />
        </form>
    )
}

export default TextArea;