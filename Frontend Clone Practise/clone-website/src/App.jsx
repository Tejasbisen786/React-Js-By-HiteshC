import React from "react";
import Increment from "./Component/increment";

const App = () => {
  const personInfo = [
    {
      id: 1,
      name: "Tejas Bisen",
      Desgn: "Full Stack Developer",
      profile_Img:
        "https://media.licdn.com/dms/image/D4D03AQE2njc2nYGKpQ/profile-displayphoto-shrink_400_400/0/1680788620604?e=1699488000&v=beta&t=2bm793RdDG2v3rzYLNfQHtiv7nAVPa8CrRt6yPACnXY ",
    },
    {
      id: 2,
      name: "Tejas Bisen",
      Desgn: "Full Stack Developer",
      profile_Img:
        "https://media.licdn.com/dms/image/D4D03AQE2njc2nYGKpQ/profile-displayphoto-shrink_400_400/0/1680788620604?e=1699488000&v=beta&t=2bm793RdDG2v3rzYLNfQHtiv7nAVPa8CrRt6yPACnXY ",
    },
    {
      id: 3,
      name: "Tejas Bisen",
      Desgn: "Full Stack Developer",
      profile_Img:
        "https://media.licdn.com/dms/image/D4D03AQE2njc2nYGKpQ/profile-displayphoto-shrink_400_400/0/1680788620604?e=1699488000&v=beta&t=2bm793RdDG2v3rzYLNfQHtiv7nAVPa8CrRt6yPACnXY ",
    },
   
  ];
  return (
    <>
      <header>
        {personInfo.map((info) => (
          <>
            <div  key ={info.id}className="w-[40vw] bg-black text-white flex flex-wrap justify-center py-3 border rounded-lg">
              <h1 className="text-red-500 "> Name : {info.name} </h1>
              <p className="text-yellow-200 px-3">
                {" "}
                Job Profile : {info.Desgn}
              </p>
              <img src={info.profile_Img} alt="" className=" w-24 rounded-lg " />
            </div>
          </>
        ))}
      </header>
      <hr />
      <Increment/>
      
    </>
  );
};

export default App;
