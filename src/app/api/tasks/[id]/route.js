import { NextResponse } from "next/server";
import connectRouteToDb from "@/middlewares/connectRouteToDb";
import Task from "@/models/Task";

export const PUT = connectRouteToDb(async (request, { params }) => {
  console.log(params.id);
  const taskFound = await Task.findByIdAndUpdate(
    params.id,
    { isDone: true },
    {
      new: true,
    }
  );
  return NextResponse.json(taskFound, { status: 200 });
});

export const DELETE = connectRouteToDb(async (request, { params }) => {
  console.log(params.id);
  await Task.findByIdAndDelete(params.id);
  return NextResponse.json({ message: "Task deleted" }, { status: 200 });
});
