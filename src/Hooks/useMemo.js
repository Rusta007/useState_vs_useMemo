import { useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const handleButton = useMemo(() => {
    console.log("rendering");
    return count * 2;
  }, [count]);

  return (
    <>
      <h1>With Use useMemo Hooks</h1>
      <h1>Number: {number}</h1>
      <button onClick={() => setNumber(number + 1)}>Number</button>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>Memoized Value: {handleButton}</h1>
    </>
  );
};
export default UseMemo;
