import React from "react";

function UserCard(props) {
  const {
    userInfo: { name, email, age, isAuth, address },
    alertName,
  } = props;

  return (
    <div className="user-card">
      <span className={isAuth ? "connected" : "not-connected"}></span>
      <h2> Name : {name} </h2>
      <h2> email :{email} </h2>
      <h2> Age :{age} </h2>

      {address && <h2> address :{address} </h2>}
      <button onClick={() => alertName(name)}>Click Me</button>
    </div>
  );
}

export default UserCard;
