import { eNumeroValido } from "./eNumeroValido";

export function calcularNumerosDivisores(numero: number): number[] {
  if (!eNumeroValido(numero)) {
    return;
  }

  let divisores = [];

  for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
      divisores.push(i);
    }
  }
  return divisores;
}
