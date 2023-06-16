import connectPageToDb from "@/utils/connectPageToDB";

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
  console.log(data);
  return (
    <main>
      {data.map((task) => {
        return <Task />;
      })}
      <Toolbar />
    </main>
  );
}
