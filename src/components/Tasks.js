"use client";
import connectPageToDb from "@/utils/connectPageToDB";
import Task from "@/models/Task";
import axios from "axios";
import { useRouter } from "next/navigation";

import { useState } from "react";

const Tasks = ({ task }) => {
  const [check, setCheck] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/tasks/${task._id}`);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheck = async () => {
    try {
      await axios.put(`http://localhost:3000/api/tasks/${task._id}`);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex">
      <p>{task.task}</p>
      <input type="checkbox" checked={task.isDone} onChange={handleCheck} />
      <button onClick={handleDelete}>Delete task</button>
    </div>
  );
};

export default Tasks;
