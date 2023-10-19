import React from 'react';

import styles from './Label.module.css';

const Label = props => {
  return (
    <label className={`${styles[props.className]}`} htmlFor={props.htmlFor}>
      {props.children}
    </label>
  );
};

export default Label;
