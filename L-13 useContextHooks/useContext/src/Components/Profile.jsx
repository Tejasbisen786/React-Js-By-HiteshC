import React from "react";
import { useContext } from "react";
import UserContext from "../Context/UserContext";

const Profile = () => {
  const { user } = UserContext(UserContext);
  if (!user) return <div> Please Login</div>;
  
  return <div> Welcome {user.username}</div>;
};

export default Profile;
