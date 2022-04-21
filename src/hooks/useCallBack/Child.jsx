import React, { useEffect } from "react";

export default function Child({ returnSample }) {
  useEffect(() => {
    console.log("Function was called");
  }, [returnSample]);
  return <div>{returnSample(" Bekzod")}</div>;
}
