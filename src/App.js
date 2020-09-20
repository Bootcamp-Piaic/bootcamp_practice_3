import React, { useState,useReducer } from 'react';
import './App.css';
import Parent from './Parent';
import MeraContext from './MyContext';

function App() {
  let number=useState (137);
  let num=useReducer()
  return (
    <MeraContext.Provider value= {number}>
      <div>
        1st App.js
      <br></br>
        <Parent ></Parent>
      </div>
    </MeraContext.Provider>
  );
}

export default App;
