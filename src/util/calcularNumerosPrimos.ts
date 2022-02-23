import { isValidNumber } from "./isValidNumber";

export function calcularNumerosPrimos(numero: number): number[] {
  if (!isValidNumber(numero) || numero === 1) {
    return;
  }
  let fatores = [];
  for (let i = 2; i <= numero; i++) {
    if (numero % i === 0) {
      fatores.push(i);
      numero /= i;
    }
  }
  return fatores;
}
