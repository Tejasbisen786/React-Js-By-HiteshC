import React, { useEffect, useState } from 'react'

const App = () => {
   
     const defaultValue=[];
     const [user,Setuser]=useState(defaultValue)

  const Data= async()=>{
    const response= fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.json())
    console.log(response);
    Setuser(response)
    
  }

  useEffect(() => {
    Data();
  }, []);
  
  return (
   <>
   <div className="app">
  {user.map((user) => (
      <div className="item-container">
        Id:{user.id} <div className="title">Title:{user.title}</div>
      </div>
   ))}
</div>
   
   </>
  )
}

export default App