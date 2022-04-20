import React, { useContext } from "react";

import { AppContext } from "./UseContext";

export default function User() {
  const { userName } = useContext(AppContext);

  return <h1>User: {userName}</h1>;
}
