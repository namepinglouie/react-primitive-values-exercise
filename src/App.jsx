import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState(1);

  function handleCounter() {
    setCounter(counter + value);
  }
  function handlePayClick() {
    if(counter >= 10) {
      setCounter(counter - 10);
      setValue(value + 1);
    } else {
      alert("You can't afford that!");
    }
  }
  function handleReset() {
    if(counter >= 100) {
      setCounter(0);
      setValue(1);
    }
  }

  return <div className="app">
    <div>Current Score: {counter}</div>
    {counter >= 100 ? (
      <div>
        <h1>You Win!</h1>
        <button onClick = {handleReset}>Play Again</button>
      </div>
    ) : (
      <div>
      <button onClick = {handleCounter}>+{value}</button>
      <button onClick = {handlePayClick}>Pay 10 points to change from +{value} to +{value + 1}</button>
      </div>
    )}
  </div>
}

export default App;
