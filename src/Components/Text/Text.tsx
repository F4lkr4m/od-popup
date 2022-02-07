import React from 'react';
import'./Text.css';

interface TextProps {
  type: 'h1' | 'h2' | 'p';
  text: string;
  secondary?: boolean;
}

const Text = (props: TextProps) => {
  return <props.type className={`${props.secondary ? 'text_color_secondary' : ''}`}>{props.text}</props.type>;
}

export default Text;
