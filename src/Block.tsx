import React from 'react';
import Button from './component/Button';
import Input from './component/Input';

const Block: React.FC<{ index: number }> = ({index}) => {
  const makeBold = (event: React.MouseEvent<HTMLButtonElement>) => {
    
    const target = event.currentTarget;
    const className = target.className;
    console.log(className);
    /* let classIndex = `text[${index}]`; */ 
    const elements = document.getElementsByClassName('text') as HTMLCollectionOf<HTMLElement>;
    console.log(elements);
    for (let i = 0; i < elements.length; i++) {
      
      if(i == index){
        console.log(i,index)
        const currentFontWeight = elements[i].style.fontWeight;
        const newFontWeight = currentFontWeight === 'bold' ? 'normal' : 'bold';
        elements[i].style.fontWeight = newFontWeight;
        const button = event.currentTarget as HTMLButtonElement;
        button.textContent = newFontWeight === 'bold' ? 'Unbold' : 'Bold';
      }
        
    }
  };

  const makeUnderLine = (event: React.MouseEvent<HTMLButtonElement>) => {
    
    const target = event.currentTarget;
    const className = target.className;
    console.log(className);
    /* let classIndex = `text[${index}]`; */ 
    const elements = document.getElementsByClassName('text') as HTMLCollectionOf<HTMLElement>;
    console.log(elements);
    for (let i = 0; i < elements.length; i++) {
      
      if(i == index){
        console.log(i,index)
        const currentTextDecoration = elements[i].style.textDecoration;
        const newTextDecoration = currentTextDecoration === 'underline' ? 'none' : 'underline';
        elements[i].style.textDecoration = newTextDecoration;
        const button = event.currentTarget as HTMLButtonElement;
        button.textContent = newTextDecoration === 'underline' ? 'normal' : 'Underline';

      }
        
    }
  };


    
  const makeItalic = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.currentTarget;
    console.log(target);
    
    const className = target.className;
    console.log(className);
    /* let classIndex = `text[${index}]`; */ 
    const elements = document.getElementsByClassName('text') as HTMLCollectionOf<HTMLElement>;
    console.log(elements);
    for (let i = 0; i < elements.length; i++) {
      if(i == index){
        console.log(i,index)
        const currentFontStyle = elements[i].style.fontStyle;
        const newFontStyle = currentFontStyle == 'italic' ? 'normal' : 'italic';
        elements[i].style.fontStyle = newFontStyle;
        const button = event.currentTarget as HTMLButtonElement;
        button.textContent = newFontStyle === 'italic' ? 'normal' : 'Italic'
      }
        
    }
  };


  const changeSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    const elements = document.getElementsByClassName('text') as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < elements.length; i++) {
      if (i === index) {
        elements[i].style.fontSize = `${event.target.value}px`;
      }
    }
  };
  const changeColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    const elements = document.getElementsByClassName('text') as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < elements.length; i++) {
      if (i === index) {
        elements[i].style.color = `${event.target.value}`;
      }
    }
  };
  
    return (
     
      <div className='col_block'>
        <Button className='bold' label="Bold" onClick={makeBold} />
        <Button className='italic' label="Italic" onClick={makeItalic} />
        <Button className='underLine' label="UnderLine" onClick={makeUnderLine} />
        <Input type='number' label="Font Size" onInput={changeSize}/>
        <Input type='color' label="Color" onInput={changeColor}/>
      </div>
    
  );
};

export default Block;