import { useState } from "react";

const ShortCircuitOverview = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("susan");

  return (
    <div>
      {}
      <h4>Falsy OR : {text || "hello world"} </h4>
      <h4>Falsy AND : {text && "hello world"} </h4>
      <h4>Falsy OR REVERSE: {"hello world" || text} </h4>
      <h4>Falsy AND REVERSE : {"hello world" && text} </h4>
      <hr />
      <h4>Truthy OR : {name || "hello world"} </h4>
      <h4>Truthy AND : {name && "hello world"} </h4>
      <h4>Truthy OR REVERSE: {"hello world" || name} </h4>
      <h4>Truthy AND REVERSE: {"hello world" && name} </h4>
    </div>
  );
};
export default ShortCircuitOverview;
