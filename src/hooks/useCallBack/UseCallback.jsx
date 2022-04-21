import React, { useCallback, useState } from "react";
import Child from "./Child";

export default function UseCallback() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("Hello world this is just a sample text");

  const returnSample = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );

  return (
    <div>
      <h1>Use Call Back hook</h1>
      <Child returnSample={returnSample} />
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {""}
        toggle
      </button>

      {toggle && <h1>toggle</h1>}

      <h1>_________________</h1>
    </div>
  );
}
