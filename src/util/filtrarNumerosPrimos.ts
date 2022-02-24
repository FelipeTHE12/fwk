import { eNumeroPrimo } from "./eNumeroPrimo";
import { eNumeroValido } from "./eNumeroValido";

export function filtrarNumerosPrimos(numeros: number[]): number[] {
  return numeros.filter((num) => {
    if (!eNumeroValido(num)) {
      return false;
    }

    if (num === 1) {
      return false;
    }

    if (eNumeroPrimo(num)) {
      return true;
    }

    return false;
  });
}
