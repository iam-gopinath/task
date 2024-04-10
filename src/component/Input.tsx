import React from 'react';

interface InputProps {
  label: string;
  onInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
}

const Input: React.FC<InputProps> = ({ label, type, onInput }) => {
  return (
    <div className='input_div'>
      <label>{label}</label>
      <input type={type} onChange={onInput} />
    </div>
  );
};

export default Input;
