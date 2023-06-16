"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Toolbar = ({}) => {
  const [task, setTask] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newTask = await axios.post(`http://localhost:3000/api/tasks`, {
        task: task,
        isDone: false,
      });
    } catch (error) {}
    router.refresh();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit"> Add a new task</button>
      </form>
    </div>
  );
};

export default Toolbar;
