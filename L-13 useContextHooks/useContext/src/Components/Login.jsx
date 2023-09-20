import React from "react";
import { useState, useContext } from "react";
import UserContext from "../Context/UserContext";

const Login = () => {
  const [username, SetUsername] = useState("");
  const [password, setPassword] = useState("");

  const { Setuser } = UserContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    Setuser(username, password);
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder='"UserName'
        value={username}
        onChange={(e) => SetUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder='"Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}> submit</button>
    </div>
  );
};

export default Login;
