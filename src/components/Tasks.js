"use client";
import connectPageToDb from "@/utils/connectPageToDB";
import Task from "@/models/Task";

import { useState } from "react";

const Tasks = ({ task }) => {
  const [check, setCheck] = useState(false);
  console.log(check);

  const handleDelete = async () => {
    try {
      await connectPageToDb();
      const taskToDelete = await Task.findByIdAndDelete(task._id);
    } catch (error) {}
  };

  return (
    <div className="flex">
      <p>{task.task}</p>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={(e) => {
          setCheck(e);
        }}
      />
      <button onClick={handleDelete}>Delete task</button>
    </div>
  );
};

export default Tasks;
