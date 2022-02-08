import React from 'react';
import './TextButton.css';

interface ButtonProps {
  label?: string;
  icon?: string;
  onClick?: () => void;
}

const TextButton = (props: ButtonProps) => {
  return (
    <button
      className={`text-button`}
      onClick={props.onClick}>
      {props.icon && <img className="text-button__icon" src={props.icon} alt="text button icon" />}
      {props.label}
    </button>
  )
}

export default TextButton;