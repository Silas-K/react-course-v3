import { useState, useEffect } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  console.log("render");
  return (
    <>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        Toggle
      </button>
      {toggle && <RandomComponent />}
    </>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    const someFunc = () => {
      console.log("Some function ran");
    };

    window.addEventListener("scroll", someFunc);

    return () => {
      console.log("Clean up function ran");
      window.removeEventListener("scroll", someFunc);
    };
  }, []);

  return <h2>Random componennt</h2>;
};

export default CleanupFunction;
