import React from 'react';

interface TextProps {
  text: string;
  className:string;
}

const Text: React.FC<TextProps> = ({text,className}) => {
  return (
    <div className='text_block'> 
    <p className={className}>
      {text}
    </p>
    </div>
  );
};

export default Text;
