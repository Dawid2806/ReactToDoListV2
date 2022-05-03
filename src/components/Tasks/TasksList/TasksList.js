import TaskItem from "../NewTask/TaskItem/TaskItem";
import classes from "./TaskList.module.css";

//import from firebase
import { db } from "../../../firebase/config";

import { doc, deleteDoc } from "firebase/firestore";
const TasksList = ({ tasks }) => {
  const daleteHandler = async (id) => {
    const docRef = doc(db, "tasks", id);
    await deleteDoc(docRef);
  };

  return (
    <main className={classes.taskList}>
      {tasks.map((task) => {
        return (
          <TaskItem
            key={task.id}
            id={task.id}
            title={task.title}
            descr={task.description}
            date={task.date}
            deleteHandler={daleteHandler}
          />
        );
      })}
    </main>
  );
};

export default TasksList;
