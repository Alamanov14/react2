// import React, { useState } from "react";

const Counter = (props) => {
  //   console.log(props);
  return (
    <div>
      <h2>{props.data}</h2>
      <button onClick={props.increment}>Plus</button>
      <button onClick={props.decrement}>Minus</button>
    </div>
  );
};

export default Counter;
