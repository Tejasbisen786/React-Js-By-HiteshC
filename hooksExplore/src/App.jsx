// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [count, setcount] = useState(0);

//   useEffect(()=>{
//      console.log("showing effect");

//      return()=>{

//      }
//   },[])


//   const add = () => setcount(count + 1);
//   const sub = () => setcount(count - 1);
//   return (
//     <>
//       <h1>Count is : {count}</h1>
//       <button onClick={add}> increment</button>
//       <button onClick={sub}>Decrement</button>
//     </>
//   );
// };

// export default App;




import React from 'react'
import Home from './Home'

import { createContext } from 'react' 
const context = createContext();

const App = () => {

  return (  

<context.Provider value={"Tejas"}>

  <h5>
     <Home/>
  </h5>
</context.Provider>


  )
}

export default App
export {context};