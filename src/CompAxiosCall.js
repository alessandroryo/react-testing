import React, { useState } from "react";
import axios from "axios";

export default function CompAxiosCall() {
  const [members, setMembers] = useState([]);

  const getMembersData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setMembers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <p>Group member lists:</p>
      <button data-testid="get-members" onClick={getMembersData}>
        Get members
      </button>
      {members.map((member, index) => {
        return (
          <p key={index} data-testid="member-name">
            {member.name}
          </p>
        );
      })}
    </div>
  );
}
