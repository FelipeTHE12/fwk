export function eNumeroValido(numero: number): boolean {
  //Valida se números são validos para operação de números Primos e Divisores
  if (
    isNaN(numero) ||
    numero === 0 ||
    !Number.isInteger(numero) ||
    numero > 1000000 ||
    numero < 0
  ) {
    return false;
  }
  return true;
}
