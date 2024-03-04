import { useState } from "react";

const ErrorExample = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <p>{count}</p>
      <button className="btn" onClick={handleClick}>
        Increment
      </button>
    </>
  );
};

export default ErrorExample;
