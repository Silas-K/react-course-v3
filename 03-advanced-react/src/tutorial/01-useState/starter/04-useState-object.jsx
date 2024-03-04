import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({});

  const { name, age, hobby } = person;

  const updatePerson = () => {
    setPerson({ name: "john", age: 28, hobby: "scream at the computer" });
  };

  return (
    <div>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h4>{hobby}</h4>
      <button className="btn" onClick={updatePerson}>
        Update
      </button>
    </div>
  );
};

export default UseStateObject;
