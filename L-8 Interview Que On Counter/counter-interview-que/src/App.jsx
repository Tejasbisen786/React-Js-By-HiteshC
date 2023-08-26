import React, { useState } from 'react'

const App = () => {

// let val=50;
// const val = [val,setval]= useState(val)
  const [val, setval]=useState(0)

  const add=()=>{

    setval(prevCount=>prevCount+1)
    setval(prevCount=>prevCount+1)
    setval(prevCount=>prevCount+1)
    setval(prevCount=>prevCount+1)
    setval(prevCount=>prevCount+1)

    // setval(val+1)
    // setval(val+1) // interviw question
    // setval(val+1)
    // setval(val+1)

  }
  const remove=()=>{
    if(val<=0)
    {
      alert("Value Can't Go Negative in way")
      
    }
    else{
      setval(val-1)
    }
  }
  return (
    <div>
      <h1 className="bg-black rounded-xl text-white py-5 mx-4 my-5 text-center font-bold font-sans text-xl ">
        
        Counter Value is {val} </h1>

      <button onClick={add} className='bg-green-400 text-black rounded px-5 py-4 m-6'> Add Value</button>
      <button  onClick={remove} className='bg-green-400 text-black rounded px-5 py-4 m-6'> Remove Value</button>

      
    </div>
  )
}

export default App