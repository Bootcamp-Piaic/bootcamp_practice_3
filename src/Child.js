import React from 'react';

function Child(props) {
  return (
    <div >
      3rd Child.js
      <br></br>
      Print value = {props.number}
    </div>
  );
}

export default Child;
