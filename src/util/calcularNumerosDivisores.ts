import { number } from "yup/lib/locale";

export function calcularNumerosDivisores(numero: number): number[] {
  if (
    isNaN(numero) ||
    numero === 0 ||
    !Number.isInteger(numero) ||
    numero > 1000000
  ) {
    return;
  }

  let divisores = [],
    quociente = 0;

  for (let i = 1; i <= numero; i++) {
    quociente = numero / i;

    if (quociente === Math.floor(quociente)) {
      divisores.push(i);
    }
  }
  return divisores;
}
