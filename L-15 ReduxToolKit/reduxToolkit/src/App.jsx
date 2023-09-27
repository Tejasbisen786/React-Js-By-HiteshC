import React from "react";
import AddTodo from "./components/addTodo";
import Todos from "./components/Todos";

const App = () => {
  return (
    <>
      <h1 className="text-center text-2xl font-bold text-white bg-orange-500 p-5">
        Redux Toolkit
      </h1>
      <AddTodo />
      <Todos />
    </>
  );
};

export default App;
