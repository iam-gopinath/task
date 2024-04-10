import React from 'react';
import Text from './component/Text';
import Block from './Block';
import './App.css'

const App: React.FC = () => {
  // const handleClick = () => {
  //   console.log('Button clicked!');
  // };
  // const onchange =() =>{
  //   console.log('changed')
  // }

  return (
    <>
    <h1>Task</h1>
    <div className='container'>
    <div className="col_1">
          <Block index={0}/> 
    </div>
    <div className="col_2">
          <Text className='text' text="He's not the sharpest knife in the drawer." />  
    </div>
    <div className="col_1">
          <Block index={1}/> 
    </div>
    <div className="col_2">
    <Text className='text' text="The big building was blazing with lights." />  
    </div>
    <div className="col_1">
          <Block index={2}/> 
    </div>
    <div className="col_2">
    <Text className='text' text="Now you must answer some big questions." />
    </div>
    <div className="col_1">
          <Block index={3}/> 
    </div>
    <div className="col_2">
    <Text className='text' text="Get Your Act Together!" />
    </div>
    </div>
    </>
  );
};

export default App;
