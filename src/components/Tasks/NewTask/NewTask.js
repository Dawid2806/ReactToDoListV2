import React, { useState } from "react";
import NewTaskForm from "./NewTaskForm/NewTaskForm";
import classes from "./NewTask.module.css";

const NewTask = () => {
  const [showNewTaskForm, setShowNewTaskForm] = useState(false);

  const showNewTaskFormHandler = () => {
    setShowNewTaskForm((prevState) => !prevState);
  };
  return (
    <>
      <div className={classes.buttons}>
        <button onClick={showNewTaskFormHandler} className={classes.button}>
          Dodaj nowe zadanie
        </button>
      </div>
      {showNewTaskForm && <NewTaskForm />}
    </>
  );
};

export default NewTask;
