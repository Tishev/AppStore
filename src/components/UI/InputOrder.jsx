import React from 'react';
import styles from './InputOrder.module.css';
const InputOrder = ({
    nameInput,
    typeInput,
    disabledBo,
    handleInput,
    valueInput,
    placeholderInput,
    bo,
}) => {
    return (
        <input
            onChange={handleInput}
            value={valueInput}
            name={nameInput}
            type={typeInput}
            className={typeInput === 'number' ? styles.inputNumber : styles.input}
            required={bo}
            placeholder={placeholderInput}
            disabled={disabledBo}
        />
    );
};

export default InputOrder;
