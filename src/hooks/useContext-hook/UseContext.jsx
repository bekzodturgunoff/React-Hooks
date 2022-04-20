import React, { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";

export const AppContext = createContext(null);

export default function UseContext() {
  const [userName, setUserName] = useState("");
  return (
    <>
      <h1>Use Context</h1>
      <AppContext.Provider value={{ userName, setUserName }}>
        <Login /> <User />
      </AppContext.Provider>
      <h1>_________________</h1>
    </>
  );
}
