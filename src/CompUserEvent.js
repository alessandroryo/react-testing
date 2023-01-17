import React, { useState } from "react";

export default function CompUserEvent({ onSubmit }) {
  const [value, setValue] = useState("");

  //   const onSubmit = (e) => {
  //     console.log("Call API Submit")
  //     e.preventDefault();
  //     console.log(value);
  //   };

  return (
    <div>
      <p>You type {value}</p>
      <input
        placeholder="Input value"
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <p data-testid="text-submit" onClick={onSubmit}>
        Submit
      </p>
    </div>
  );
}
