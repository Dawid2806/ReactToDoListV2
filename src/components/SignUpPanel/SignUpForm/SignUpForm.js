import { useFormik } from "formik";
import { validate } from "../../LoginPanel/LoginForm/LoginValidation";
import classes from "./SignUpForm.module.css";

//import from Firebase
import { useSingup } from "../../../hooks/useSingup";
const SignUpForm = () => {
  const { signup } = useSingup();

  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    onSubmit(values) {
      signup(formik.values.email, formik.values.password);
    },
    validate,
  });

  return (
    <form onSubmit={formik.handleSubmit} className={classes.form}>
      <h2 className={classes.title}>Panel Rejestracji</h2>
      <div className={classes.form__container}>
        <label htmlFor="email">Email</label>
        <input
          className={classes.input}
          type="email"
          name="email"
          id="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <span className={classes.error}>{formik.errors.email}</span>
        ) : null}
      </div>
      <div className={classes.form__container}>
        <label htmlFor="password">password</label>
        <input
          className={classes.input}
          type="password"
          name="password"
          id="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? (
          <span className={classes.error}>{formik.errors.password}</span>
        ) : null}
      </div>
      <div className={classes.buttons}>
        <button type="submit" className={classes.button}>
          Zarejestruj się
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
