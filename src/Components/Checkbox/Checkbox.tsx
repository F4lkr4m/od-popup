import React from 'react';
import './Checkbox.css';

interface CheckboxProps {
  label?: string | JSX.Element;
  checked?: boolean;
  disabled?: boolean;
}

const Checkbox = (props: CheckboxProps) => {
  return (
    <label className="check">
      <input 
        className="check__input" 
        type="checkbox"
        checked={props.checked}
        disabled={props.disabled} />
      <span className="check__box"></span>
      {props.label}
    </label>
  )
}

export default Checkbox;
