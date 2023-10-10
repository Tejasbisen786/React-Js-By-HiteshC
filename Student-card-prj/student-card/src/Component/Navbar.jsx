import React from "react";

const Navbar = () => {
  return (
    <>
      <div className=" bg-slate-950 py-5 px-3 rounded-xl text-white w-[50vw]  text-lg hover:text-red-500 duration- m-auto flex space-x-5 justify-around">
        <h2>Home</h2>
        <h2>About</h2>
        <h2>Contact</h2>
        <h2> Call us</h2>
      </div>
    </>
  );
};

export default Navbar;
