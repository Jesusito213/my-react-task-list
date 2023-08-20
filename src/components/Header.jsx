import React, { forwardRef } from "react";

const Header = forwardRef((props, ref) => {
  return (
    <div className="d-flex">
      <h1 className="mb-3">My App</h1>
      <h1 ref={ref}> </h1>
    </div>
  );
});

export default Header;