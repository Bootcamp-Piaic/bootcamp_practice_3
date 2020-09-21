import React, { useState } from 'react';
import './App.css';
import Parent from './Parent';
import MyContext from './MyContext';

function App() {
  let number=useState (137);
  return (
    <MyContext.Provider value= {number}>
      <div>
        1st App.js
      <br></br>
        <Parent ></Parent>
      </div>
    </MyContext.Provider>
  );
}

export default App;
