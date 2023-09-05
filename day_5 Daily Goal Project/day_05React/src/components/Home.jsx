import React, { useCallback, useState } from "react";
import Task from "./Task";
const Home = () => {
  const [task, setTask] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  console.log(title, desc);

  const submitHandler = (e) => {
    e.preventDefault();

    setTask([...task, { title, desc }]);
  };

  const deleteTask = () => {
    const filterArray = task.filter((val, i) => {
      return i !== index;

    });

    setTask(filterArray)
  };
  return (
    <div className="container">
      <h1> To Do List</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name=""
          id=""
          placeholder="Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Description"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        ></textarea>
        <button type="submit" className="button">
          {" "}
          Add
        </button>
      </form>

      {task.map((item, index) => (
        <Task
          key={index}
          title={item.title}
          desc={item.desc}
          deleteTask={deleteTask}
          index={index}
        />
      ))}
    </div>
  );
};

export default Home;
