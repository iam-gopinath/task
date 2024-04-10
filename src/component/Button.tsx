import React from 'react';

interface ButtonProps {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className:string;
}

const Button: React.FC<ButtonProps> = ({ label, className, onClick }) => {
  return (
    <div>
    <button className={className} onClick={onClick}>
      {label} 
    </button>
    </div>
  );
};

export default Button;
