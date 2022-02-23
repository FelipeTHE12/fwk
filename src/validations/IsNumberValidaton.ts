import * as yup from "yup";

export const numberSchema = yup.object().shape({
  number: yup
    .number()
    .nullable(true)
    .required("O campo number é obrigatório.")
    .positive("O campo number deve ser um número positivo.")
    .integer("O campo number deve ser inteiro."),
});
