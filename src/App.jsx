import React from "react";
import "./App.css";
import Reducer from "./hooks/Reducer";
import Ref from "./hooks/Ref";
import LayoutEffect from "./hooks/LayoutEffect";
import ImperativeHandle from "./hooks/imperative-hook/ImperativeHandle";
import UseContext from "./hooks/useContext-hook/UseContext";
function App() {
  return (
    <div className="App">
      <Reducer />
      <Ref />
      <LayoutEffect />
      <ImperativeHandle />
      <UseContext />
    </div>
  );
}

export default App;
