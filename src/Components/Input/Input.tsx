import React from 'react';
import './Input.css';

interface InputProps {
  label?: string;
  type?: 'text' | 'tel' | 'email';
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  disabled?: boolean;
}

const Input = (props: InputProps) => {
  return (
    <>
      <label className={`input__label`}>
        <span className={`input__span`}>{props.label}</span>
        <input 
          className={`input ${props.error && !props.disabled ?'input__border_error' : ''}`} 
          onChange={props.onChange}
          disabled={props.disabled} 
          type={props.type} 
          placeholder={props.placeholder} />
      </label>
      {props.error && !props.disabled &&
        <span className='input__error-span'>
          {props.error}
        </span>}
    </>
  );
}

export default Input;