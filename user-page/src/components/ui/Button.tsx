import React from 'react';
import './Button.css';

interface ButtonProps {
  text: string;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ text, onClick, type = 'button' }) => {
  return (
    <button className="custom-button" onClick={onClick} type={type}>
      {text}
    </button>
  );
};

export default Button;