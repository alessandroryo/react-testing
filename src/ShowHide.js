import React, { useState } from "react";

export default function ShowHide() {
  const [visible, setVisible] = useState(true);

  const toggleShow = () => {
    visible ? setVisible(false) : setVisible(true);
  };

  return (
    <div>
      <p>Current condition: {visible ? "Show" : "Hide"}</p>
      <button onClick={toggleShow} data-testid="toggle-button">
        {visible ? "Hide" : "Show"}
      </button>
    </div>
  );
}
