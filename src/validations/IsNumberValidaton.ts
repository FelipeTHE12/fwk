import yup from "yup";

export const numberSchema = yup.object().shape({
  number: yup.number().required().positive().integer(),
});
