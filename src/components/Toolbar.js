"use client";

import { useState } from "react";
import axios from "axios";
import connectPageToDb from "@/utils/connectPageToDB";

const handleSubmit = async (event) => {
  event.preventDefault();
  await connectPageToDb();
  const newTask = await axios.post(`http://localhost/api/tasks/`, {
    task: task,
    isDone: false,
  });
};

const Toolbar = () => {
  const [task, setTask] = useState("");
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit"></button>
      </form>
    </div>
  );
};

export default Toolbar;
