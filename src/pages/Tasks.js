import React, { useState } from "react";
import NewTask from "../components/Tasks/NewTask/NewTask";
import TasksList from "../components/Tasks/TasksList/TasksList";
//import from Firebase
import { useCollection } from "../hooks/useCollection";
import { useAuthContext } from "../hooks/useAuthContext";
const Tasks = (props) => {
  const { user } = useAuthContext();
  const { documents: tasks } = useCollection("tasks", ["uid", "==", user.uid]);
  return (
    <main>
      <NewTask />
      {tasks && <TasksList tasks={tasks} />}
    </main>
  );
};

export default Tasks;
