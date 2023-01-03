import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [hex, setHex] = useState("#ffffff");
  
  function randomHex(){
    const randomhex= "#" + Math.floor(Math.random()*16777721).toString(16);
    setHex(randomhex);
  }
  return (
    <div className="App" style={{backgroundColor:`${hex}`}}>
      <h1>{hex}</h1>
      <button onClick={randomHex}>click for new background</button>
      <button onClick={()=> navigator.clipboard.writeText(hex)}>copy the hex value</button>
    </div>
  );
}

export default App;
