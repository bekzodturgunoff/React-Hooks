import React, { forwardRef, useImperativeHandle, useState } from "react";

const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    isClicked() {
      setToggle(!toggle);
    },
  }));

  return (
    <div>
      <button>Button From Child</button>
      {toggle && <span>Toggle</span>}
    </div>
  );
});
export default Button;
