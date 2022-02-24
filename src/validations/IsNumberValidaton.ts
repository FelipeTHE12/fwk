import * as yup from "yup";

export const numberSchema = yup.object().shape({
  numero: yup
    .number()
    .typeError("O campo number só aceita valores do tipo numerico.")
    .nullable(false)
    .required("O campo number é obrigatório.")
    .positive("O campo number deve ser um número positivo.")
    .integer("O campo number deve ser inteiro.")
    .min(1, "O campo number não pode ser menor que 1")
    .max(1000000, "O campo number não pode ser maior que 1.000.000"),
});
