import React from "react";
import UserCard from "./components/UserCard.js";
import "./App.css";

const users = [
  {
    name: "John Doe",
    age: 40,
    email: "John@gmail.com",
    isAuth: false,
  },
  {
    name: "Ghazi Haddad",
    age: 50,
    email: "ghazi@gmail.com",
    isAuth: true,
    address: "Tunis",
  },
  {
    name: "Hamdi Sansa",
    age: 40,
    email: "hamdi@gmail.com",
    isAuth: false,
  },
  {
    name: "Yassine Mohamed",
    age: 40,
    email: "Mohamed@gmail.com",
    isAuth: false,
  },
];

function App() {
  const handleAlertName = (name) => alert(name);

  return (
    <div>
      {users.map((el, i) => (
        <UserCard key={i} userInfo={el} alertName={handleAlertName} />
      ))}
    </div>
  );
}

export default App;
