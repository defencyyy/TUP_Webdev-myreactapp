import React, { useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState(1);

  const incNumber = () => {
    setNum(num + 1);
  };

  const decNumber = () => {
    setNum(num - 1);
  };

  const setToZero = () => {
    setNum(0);
  };

  return (
    <div className="App">
      <button onClick={incNumber}>Increment</button>
      <button onClick={decNumber}>Decrement</button>
      <button onClick={setToZero}>Zero</button>
      <h1>{num}</h1>
    </div>
  );
}

export default App;
