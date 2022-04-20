import React from "react";
import "./App.css";
import Reducer from "./hooks/Reducer";
import Ref from "./hooks/Ref";
import LayoutEffect from "./hooks/LayoutEffect";
import ImperativeHandle from "./hooks/imperative-hook/ImperativeHandle";
import UseContext from "./hooks/useContext-hook/UseContext";
import UseMemo from "./hooks/UseMemo";
function App() {
  return (
    <div className="App">
      <Reducer />
      <Ref />
      <LayoutEffect />
      <ImperativeHandle />
      <UseContext />
      <UseMemo/>
    </div>
  );
}

export default App;
