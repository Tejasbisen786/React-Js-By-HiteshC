import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams();
  return <div className="text-center font-bold bg-slate-500 text-white  p-4 text-lg">User : {userid} </div>;
};

export default User;
