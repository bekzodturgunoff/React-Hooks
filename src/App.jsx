import React from "react";
import "./App.css";
import Reducer from "./hooks/Reducer";
import Ref from "./hooks/Ref";
import LayoutEffect from "./hooks/LayoutEffect";
function App() {
  return (
    <div className="App">
      <Reducer />
      <Ref />
      <LayoutEffect />
    </div>
  );
}

export default App;
