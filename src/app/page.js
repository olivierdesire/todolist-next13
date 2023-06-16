import connectPageToDb from "@/utils/connectPageToDB";

import Tasks from "@/components/Tasks";
import Task from "@/models/Task";
import Toolbar from "@/components/Toolbar";

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
        return <Tasks />;
      })}
      <Toolbar />
    </main>
  );
}
