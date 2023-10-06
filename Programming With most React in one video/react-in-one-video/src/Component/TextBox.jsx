import React from "react";

const TextBox = ({guide}) => {
  return (
    <>
      <div className="w-[90vw] bg-black text-white p-6 shadow-lg rounded m-1">
        <h1 className="font-bold text-2xl">React Learning By {guide}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
          pariatur officia. Repudiandae amet, iste delectus distinctio ex
          debitis ipsam officia ipsum adipisci? Excepturi, necessitatibus porro.
          Possimus libero minima tempora debitis.
        </p>
        <img src="" alt="" />
      </div>
    </>
  );
};

export default TextBox;
