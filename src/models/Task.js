import { Schema, models, model } from "mongoose";

const toDoListSchema = new Schema({
  task: String,
  isDone: Boolean,
});

export default models.Task || model("Task", toDoListSchema);
