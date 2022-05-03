import classes from "./TaskItem.module.css";
import { useAuthContext } from "../../../../hooks/useAuthContext";

// import from firebase
import { db } from "../../../../firebase/config";
import { collection, addDoc } from "firebase/firestore";
const TaskItem = (props) => {
  const { user } = useAuthContext();

  const addTaskToArchiw = async (id) => {
    await addDoc(collection(db, "completed"), {
      uid: user.uid,
      title: props.title,
      description: props.descr,
      date: props.date,
    });
    props.deleteHandler(props.id);
  };

  return (
    <div className={classes.card}>
      <span
        onClick={() => {
          props.deleteHandler(props.id);
        }}
        className={classes.delete}
      >
        🗑️
      </span>
      <span className={classes.completed} onClick={addTaskToArchiw}>
        ✔️
      </span>
      <h2 className={classes.title}>{props.title}</h2>
      <div className={classes.description}>
        <p className={classes.para}>{props.descr}</p>
      </div>
      <span className={classes.date}>{props.date}</span>
    </div>
  );
};

export default TaskItem;
