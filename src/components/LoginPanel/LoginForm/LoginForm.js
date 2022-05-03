import { useFormik } from "formik";
import { validate } from "./LoginValidation";
import classes from "./LoginForm.module.css";
//Import FireBase
import { useLogin } from "../../../hooks/useLogin";
const LoginForm = () => {
  const { login } = useLogin();

  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    onSubmit(values) {
      login(formik.values.email, formik.values.password);
    },
    validate,
  });
  return (
    <form onSubmit={formik.handleSubmit} className={classes.form}>
      <h2 className={classes.title}>Panel Logowania</h2>
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
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? (
          <span className={classes.error}>{formik.errors.password}</span>
        ) : null}
      </div>
      <div className={classes.buttons}>
        <button type="submit" className={classes.button}>
          Zaloguj
        </button>
      </div>
    </form>
  );
};
export default LoginForm;
