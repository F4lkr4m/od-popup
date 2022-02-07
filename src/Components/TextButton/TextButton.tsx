import React from 'react';
import './TextButton.css';

interface ButtonProps {
  label: string;
}

const TextButton = (props: ButtonProps) => {
  return (
    <button
      className={`text-button`}>
      {props.label}
    </button>
  )
}

export default TextButton;