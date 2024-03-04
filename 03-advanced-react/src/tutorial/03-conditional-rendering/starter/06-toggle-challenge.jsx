import { useState } from "react";

const ToggleChallenge = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        {toggle ? "hide" : "show"}
      </button>
      {toggle && <Alert />}
      {toggle ? <Alert /> : null}
    </>
  );
};

const Alert = () => {
  return <div className="alert alert-danger">hello world</div>;
};

export default ToggleChallenge;
