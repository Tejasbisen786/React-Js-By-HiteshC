import React, { useEffect, useState } from "react";

const Increment = () => {
  const [val, setVal] = useState(0);

  const increment = () => {
    setVal(val + 1);
  };
  const Reduce = () => {
    setVal(val - 1);
  };

  useEffect(()=>{

    
  },[])

  return (
    <>
      <div className="flex justify-center flex-col w-1/2 space-x-1 space-y-3">
        <h1 className="text-center"> Value is : {val}</h1>
        <button
          className="bg-blue-500  border text-white rounded-lg px-12 py-3"
          onClick={increment}
        >
          Add
        </button>
        <button
          className="bg-blue-500  border text-white rounded-lg px-12 py-3"
          onClick={Reduce}
        >
          Reduce
        </button>
      </div>
    </>
  );
};

export default Increment;
