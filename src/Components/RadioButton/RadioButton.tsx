import React from 'react';
import './RadioButton.css';

interface RadioButtonProps {
  label?: string;
  id?: string;
  checked?: boolean;
}

const RadioButton = (props: RadioButtonProps) => {
  return (
    <div className="radio">
      <input 
        id={props.id}
        type="radio"
        name="radio" 
        className="radio__input"
        checked={props.checked} />
      <label htmlFor={props.id} className="radio__label">{props.label}</label>
    </div>
  );
}

export default RadioButton;
