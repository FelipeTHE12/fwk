export function calcularNumerosPrimos(numero: number): number[] {
  if (
    isNaN(numero) ||
    numero === 0 ||
    !Number.isInteger(numero) ||
    numero > 1000000 ||
    numero === 1
  ) {
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
