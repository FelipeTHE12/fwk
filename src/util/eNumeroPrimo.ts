import { eNumeroValido } from "./eNumeroValido";

export const eNumeroPrimo = (num: number): boolean => {
  if (!eNumeroValido(num)) {
    return;
  }

  for (let i = 2; i < num; i++)
    if (num % i === 0) {
      return false;
    }
  return num > 1;
};
