import React from 'react';
import './Button.css';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  size?: 's' | 'l';
  disabled?: boolean;
  contrast?: boolean;
  stretched?: boolean;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className={
        `button
          ${props.size ? 'button--size-' + props.size : ''}
          ${props.contrast ? 'button-contrast' : ''}
          ${props.stretched ? 'button-stretched' : ''}`}
      onClick={props.onClick}
      disabled={props.disabled}>
      {props.label}
    </button>
  )
}

export default Button;