import React from 'react';
import styles from '../ProfileInfo.module.scss';

const InputProfile = ({ type, onChange, value }) => {
    return <input type={type} value={value} onChange={onChange} className={styles.input} />;
};

export default InputProfile;
