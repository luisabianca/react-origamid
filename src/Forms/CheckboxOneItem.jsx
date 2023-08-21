import React, { useState } from 'react'

const CheckboxOneItem = () => {
    const [checkbox, setCheckbox] = useState(false);

    function handleChange({ target }) {
        setCheckbox(target.checked);
    }

    return (
        <form>
            <label>
                <input
                    type="checkbox"
                    value="termos"
                    checked={checkbox}
                    onChange={handleChange}
                />
                Li os termos.
            </label>
        </form>
    )
}

export default CheckboxOneItem;