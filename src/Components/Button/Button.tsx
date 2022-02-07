import React from 'react';
import './Button.css';

interface ButtonProps {
  label: string;
  size?: 's' | 'l',
  disabled?: boolean,
  contrast?: boolean,
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className={
        `button
         ${props.size ? 'button--size-' + props.size : ''}
         ${props.contrast ? 'button-contrast' : ''}`}
      disabled={props.disabled}>
      {props.label}
    </button>
  )
}

export default Button;