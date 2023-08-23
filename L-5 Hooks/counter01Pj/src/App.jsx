import { useState } from "react";
import "./App.css";

function App() {

  let [counter, setCounter] = useState(0);

  // let counter=5
  const addValue = () => {
    // console.log("Clicked", counter);
    // counter = counter + 1;
    setCounter(counter++);
  };
 //Remove Value Function
  const removeValue = () => {

    if(counter<=0)
    {
      alert("Value Goes Towards Negative ")
    }
    setCounter(counter--);
  };

  return (
    <>
      <h1>COUNTER </h1>
      <h3>Counter Value : {counter}</h3>

      <button onClick={addValue}> Add Value : {counter}</button>
      <br />
      <button onClick={removeValue}> Remove Value :{counter}</button>

      <p> Footer : {counter}</p>
    </>
  );
}

export default App;
