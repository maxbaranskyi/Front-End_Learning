import React from 'react';

import './style.scss';

interface Props {
  label: string,
  name: string,
  type: string,
  placeholder: string
}

const Input = (props: Props) => {
  return <div>
      <label>{props.label}</label>
      <input name={props.name} type={props.type} placeholder={props.placeholder}></input>
  </div>;
};

export default Input;
