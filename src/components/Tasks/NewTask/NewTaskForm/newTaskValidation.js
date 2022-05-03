import dayjs, { Dayjs } from "dayjs";

export const validate = (values) => {
  const day = dayjs();
  const errors = {};
  if (!values.title) {
    errors.title = "Nazwa nie może być pusta ";
  }
  if (!values.description) {
    errors.description = "Brak opisu?  ";
  }
  if (!values.date) {
    errors.date = "Brak daty?  ";
  }
  if (values.date < day.format("YYYY-MM-DD")) {
    errors.date = "Nie możesz się cofnąć w czasie ";
  }
  return errors;
};
