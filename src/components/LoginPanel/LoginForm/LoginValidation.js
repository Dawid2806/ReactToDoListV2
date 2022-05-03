export const validate = (values) => {
  const errors = {};

  if (!values.password) {
    errors.password = "podaj hasło";
  }
  if (!values.email) {
    errors.email = "Podaj email";
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "nie poprawy email ";
  }

  return errors;
};
