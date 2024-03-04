import { data } from "../../../data";
import { useState } from "react";

const UseStateArray = () => {
  console.log(data);

  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <div>
      {people.map((person) => (
        <div key={person.id} className="item">
          <h4>{person.name}</h4>
          <button onClick={() => removeItem(person.id)}>Remove</button>
        </div>
      ))}
      <button className="btn" onClick={() => setPeople([])}>
        Clear Items
      </button>
    </div>
  );
};

export default UseStateArray;
