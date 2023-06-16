import { Schema, models, model } from "mongoose";

const toDoListSchema = new Schema({
  task: String,
  isDone: Boolean,
});

const Task = models.Task || model("Task", toDoListSchema);
export default Task;
