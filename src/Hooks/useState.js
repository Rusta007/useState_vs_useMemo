import { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  function handleButton() {
    console.log("Rerendering..");
    return count * 2;
  }

  return (
    <>
      <h1>Without Use useMemo Hooks</h1>
      <br />
      <h1>Number: {number}</h1>
      <button onClick={() => setNumber(number + 1)}>Number</button>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>Computed Value: {handleButton()}</h1>
    </>
  );
};

export default UseState;
