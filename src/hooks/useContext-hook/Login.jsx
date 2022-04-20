import React, { useContext } from "react";
import { AppContext } from "./UseContext";

export default function Login() {
  const { setUserName } = useContext(AppContext);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
    </div>
  );
}
