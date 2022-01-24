import React from "react";

function Button({ btnText, click }) {
  return (
    <button className="btn" onClick={click}>
      {btnText}
    </button>
  );
}

export default Button;
