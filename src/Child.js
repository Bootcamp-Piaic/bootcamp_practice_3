import React from 'react';
import MeraContext from './MyContext';
function Child() {
    let number=React.useContext(MeraContext)
  return (
    <div >
      3rd Child.js
      <br></br>
      Print value = {number[0]}
      <br></br>
      <button onClick={()=>{number[1](++number[0])}}>update value in child</button>
    </div>
  );
}

export default Child;
