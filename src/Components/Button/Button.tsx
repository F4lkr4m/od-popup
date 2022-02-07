import React from 'react';
import './Button.css';

interface ButtonProps {
  label: string;
  size?: 's' | 'l',
  disabled?: boolean,
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className={
        `button
         ${props.size ? 'button--size-' + props.size : ''}`
      }
      disabled={props.disabled}>
      {props.label}
    </button>
  )
}

export default Button;