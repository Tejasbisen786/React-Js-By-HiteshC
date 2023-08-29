import React, { useState } from "react";

const App = () => {
  const [Colors, setColors] = useState("olive");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: Colors }}
    >
      <div
        className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2
        "
      >
        <div className="flex  flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={()=>setColors("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ background: "red" }}
          >
            Red
          </button>

          <button
          onClick={()=>setColors("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ background: "blue" }}
          >
            Blue
          </button>
          <button
          onClick={()=>setColors("teal")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ background: "teal" }}
          >
            Teal
          </button>
          <button
          onClick={()=>setColors("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ background: "green" }}
          >
            Green
          </button>
          <button
          onClick={()=>setColors("orange")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ background: "orange" }}
          >
            Orange
          </button>
          <button
          onClick={()=>setColors("pink")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ background: "pink" }}
          >
            Pink
          </button>
          <button
          onClick={()=>setColors("aliceblue")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg "
            style={{ background: "aliceblue" }}
          >
            aliceblue
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
