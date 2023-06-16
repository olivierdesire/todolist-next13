import connectPageToDb from "@/utils/connectPageToDB";
import Task from "@/models/Task";
import Tasks from "@/components/Tasks";
import Toolbar from "@/components/Toolbar";

export const dynamic = "force-dynamic";

const fetchTasks = async () => {
  try {
    await connectPageToDb();
    const tasks = await Task.find();
    return tasks;
  } catch (error) {}
};

export default async function Home() {
  const data = await fetchTasks();

  return (
    <main>
      {data.map((task) => {
        return <Tasks key={task._id} task={JSON.parse(JSON.stringify(task))} />;
      })}
      <Toolbar />
    </main>
  );
}
