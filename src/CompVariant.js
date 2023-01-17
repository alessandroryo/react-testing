import React, { useState, useEffect } from "react";

export const data = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default function CompVariant() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setUser("Alessandro Ryo");
    }, 1000);
  }, []);
  return (
    <>
      {user ? <p>Welcome. {user}</p> : <p>Loading...</p>}
      <p>Days in a week:</p>
      {data.map((day, index) => {
        return (
          <p key={index} data-testid="day">
            {day}
          </p>
        );
      })}
    </>
  );
}
