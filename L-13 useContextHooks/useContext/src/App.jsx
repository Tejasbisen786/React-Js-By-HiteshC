import React from "react";
import UserContextProvider from "./Context/UserContextProvider";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
 
const App = () => {
  return (
    <>
      <UserContextProvider>
        <h1 className="text-center">REACT WITH CHAI AND CODE</h1>
        <Login/>
        <Profile/>
      </UserContextProvider>
    </>
  );
};

export default App;
