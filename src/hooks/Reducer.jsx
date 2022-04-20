import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "DECREMENT":
      return { count: state.count - 1, showText: state.showText };
    case "ShowText":
      return { count: state.count, showText: !state.showText };
    default:
      state;
  }
};

export default function Reducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "ShowText" });
        }}
      >
        PLUS
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
          dispatch({ type: "ShowText" });
        }}
      >
        MINUS
      </button>
      {state.showText && <p>This is a text</p>}
    </div>
  );
}
