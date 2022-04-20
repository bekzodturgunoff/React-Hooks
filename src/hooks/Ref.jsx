import React, { useRef, useState } from "react";

export default function Ref() {
  const [name, setName] = useState("");
  const inputRef = useRef(null);
  const onClick = () => {
    inputRef.current.focus();
    console.log(inputRef.current.value);
    setName(inputRef.current.value);
  };
  return (
    <div>
      <h1>Use Ref Hook </h1>
      <h1>{name}</h1>

      <input type="text" placeholder="useRef Focus" ref={inputRef} />
      <button onClick={onClick}>Focus</button>
      <h1>_________________</h1>
    </div>
  );
}
