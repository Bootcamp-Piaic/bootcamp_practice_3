import React from 'react';
import Child from './Child';
import Child2 from './Child2';

function Parent() {
  return (
    <div >
       2nd Parent.js
      <br></br>
      <Child ></Child>
      <Child2></Child2>
    </div>
  );
}

export default Parent;
