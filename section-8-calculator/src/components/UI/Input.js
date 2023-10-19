import React from 'react';

import styles from './Input.module.css';

const Input = props => {
  return (
    <input className={`${styles[props.className]}`} type={props.className} value={props.value} onChange={props.onChange} id={props.id}>
    {props.childern}
    </input>
  );
};
export default Input;
