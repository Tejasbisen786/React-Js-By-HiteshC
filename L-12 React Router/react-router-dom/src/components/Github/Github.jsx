import React, { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {

    const data=useLoaderData()
//   const [data, setdata] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/Tejasbisen786")
//       .then((res) => res.json())
//       .then((data) => {
//         setdata(data);
//       });
//   }, []);

  return (
    <div className="text-center m-4 bg-orange-400 text-white p-4 text-xl flex  flex-row-reverse items-center justify-center  space-x-7 gap-5">
      <div className="main flex flex-col items-center justify-center border p-4  rounded ">
        <h2 className="font-semibold "> Pofile Name: {data.name}</h2>
        <h2 className="font-semibold ">Github Repos: {data.public_repos}</h2>
      </div>
      <img
        src={data.avatar_url}
        alt=""
        className="w-72 rounded-full shadow-lg   "
      />
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch(" https://api.github.com/users/Tejasbisen786");
   return response.json()
};
