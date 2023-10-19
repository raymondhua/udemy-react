import React from "react";

import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <input
      className={`${styles[props.className]}`}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      id={props.id}
    />
  );
};
export default Input;
 