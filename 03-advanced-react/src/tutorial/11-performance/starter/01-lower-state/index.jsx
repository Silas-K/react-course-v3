import { useState } from "react";
import { data } from "../../../../data";
import List from "./List";
import { useMemo } from "react";
import Counter from "./Counter";
const LowerState = () => {
  const [people, setPeople] = useState(data);

  return (
    <section>
      <Counter></Counter>
      <List people={people} />
    </section>
  );
};
export default LowerState;
