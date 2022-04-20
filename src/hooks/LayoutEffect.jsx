import React, { useLayoutEffect, useEffect } from "react";

export default function LayoutEffect() {
  useLayoutEffect(() => {
    console.log("UseLayout");
  }, []);

  useEffect(() => {
    console.log("UseEffect");
  }, []);

  return <div></div>;
}

// the only difference between two is that useLayoutEffect called before page loads
// useLayoutEffect is used for pages and styling layouts
// useEffect called after page loaded
