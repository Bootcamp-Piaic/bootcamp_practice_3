import React, { useReducer } from 'react';
import numberReducer from './numberReducer.js';
function Child2() {
    //let number=React.useContext(MeraContext)
    let [state,dispatch]=useReducer(numberReducer,7)
  return (
    <div >
      Child.js 2sra child value is = {state}
      <br></br>
      <button onClick={()=>{dispatch({type:'increment',val:100});}}>increase</button>
      <button onClick={()=>{dispatch({type:'decrement',val:100})}}>decrease</button>
    </div>
  );
}

export default Child2;
