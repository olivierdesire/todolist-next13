import { NextResponse } from "next/server";
import connectRouteToDb from "@/middlewares/connectRouteToDb";
import Task from "@/models/Task";

export const POST = connectRouteToDb(async (request) => {
  try {
    const body = await request.json();

    const newTask = new Task({
      task: body.task,
      isDone: body.isDone,
    });
    await newTask.save();
    return NextResponse.json(newTask, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
});
