import React, { useState } from "react";
import { FormikProvider, useFormik } from "formik";

import { validate } from "./newTaskValidation";
import classes from "./NewTaskForm.module.css";
// import from firebase
import { db } from "../../../../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { useAuthContext } from "../../../../hooks/useAuthContext";
const NewTaskForm = () => {
  const { user } = useAuthContext();

  const addNewTaskToFirebase = async () => {
    await addDoc(collection(db, "tasks"), {
      title: formik.values.title,
      description: formik.values.description,
      date: formik.values.date,
      uid: user.uid,
    });
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      date: "",
    },
    validate,
    onSubmit: (values) => {
      addNewTaskToFirebase();
      formik.handleReset();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={classes.formBox}>
      <div className={classes.box}>
        <label htmlFor="title">Tytuł Zadania </label>
        <input
          type="text"
          name="title"
          id="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.title && formik.errors.title ? (
          <span className={classes.error}>{formik.errors.title}</span>
        ) : null}
      </div>
      <div className={classes.box}>
        <label htmlFor="title">Opis Zadania </label>
        <input
          type="text"
          name="description"
          id="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.description && formik.errors.description ? (
          <span className={classes.error}>{formik.errors.description}</span>
        ) : null}
      </div>
      <div className={classes.box}>
        <label htmlFor="title">Data do wykonania </label>
        <input
          type="date"
          name="date"
          id="date"
          value={formik.values.date}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.date && formik.errors.date ? (
          <span className={classes.error}>{formik.errors.date}</span>
        ) : null}
      </div>
      <div className={classes.buttons}>
        <button className={classes.button} type="submit">
          Dodaj
        </button>
      </div>
    </form>
  );
};

export default NewTaskForm;
