import { useState, useEffect } from "react";

function HooksExamples() {
  const [count, setCount] = useState(0);
  const [buttonColor, setButtonColor] = useState("white");

  useEffect(() => {
    console.log("Rendering every time");
  }, [count]);

  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };
  const resetCount = () => {
    setCount(0);
  };

  const updateColor = () => {
    setButtonColor("green");
  };
  return (
    <>
      <p>count :{count}</p>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={resetCount}>Reset</button>
      <div>
        <button style={{ backgroundColor: buttonColor }} onClick={updateColor}>
          Change Color
        </button>
      </div>
    </>
  );
}

export default HooksExamples;
