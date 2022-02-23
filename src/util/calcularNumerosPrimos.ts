export function calcularNumerosPrimos(numero) {
  let fatores = [];
  for (let i = 2; i <= numero; i++) {
    if (numero % i === 0) {
      fatores.push(i);
      numero /= i;
    }
  }
  return fatores;
}
