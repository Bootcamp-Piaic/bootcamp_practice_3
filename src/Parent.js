import React from 'react';
import Child from './Child'
function Parent(props) {
  return (
    <div >
      2nd Parent.js
      <br></br>
      <Child number={props.number}></Child>
    </div>
  );
}

export default Parent;
