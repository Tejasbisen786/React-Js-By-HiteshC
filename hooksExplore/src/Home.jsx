import React, { useContext } from "react";
import { Context } from "react";
import { context } from "./App";

const Row = () => {
    const data= useContext(context)

    console.log(data);
  return <h2> {data}</h2>;
};
const Home = () => {


  return (
    <>
      <h1>i'm {data}</h1>

      <Row data={"Tuhsar"} />
    </>
  );
};

export default Home;
