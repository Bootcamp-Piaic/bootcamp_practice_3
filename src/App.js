import React,{useState} from 'react';
import './App.css';
import Parent from './Parent'

function App() {
  let [number,changenumber]=useState(137)
  return (
    <div>
      1st App.js
      <br></br>
      <Parent number={number}></Parent>
    </div>
  );
}

export default App;
