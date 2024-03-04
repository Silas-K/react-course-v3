import { useState } from "react";
import data from "./data";

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h2>{people.length} Birthdays Today</h2>
        <List people={people} />
        <button type="button" className="btn" onClick={() => setPeople([])}>
          Clear All
        </button>
      </section>
    </main>
  );
};

const List = ({ people }) => {
  return (
    <div>
      {people.map((person) => (
        <Person {...person} key={person.id}></Person>
      ))}
    </div>
  );
};

export const Person = ({ name, age, image }) => {
  return (
    <div className="person">
      <img src={image} alt="" className="img" />
      <div>
        <h4>{name}</h4>
        <p>{age}</p>
      </div>
    </div>
  );
};

export default App;
