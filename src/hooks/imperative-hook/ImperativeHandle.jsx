import React, { useRef } from "react";
import Button from "./Button";

export default function ImperativeHandle() {
  const buttonRef = useRef(null);
  return (
    <div>
      <h1>Use Imperative Handle Hook</h1>
      <button
        onClick={() => {
          buttonRef.current.isClicked();
        }}
      >
        Button From Parent
      </button>
      <Button ref={buttonRef} />
      <h1>_________________</h1>
    </div>
  );
}
