export function isValidNumber(numero: number): boolean {
  if (
    isNaN(numero) ||
    numero === 0 ||
    !Number.isInteger(numero) ||
    numero > 1000000
  ) {
    return false;
  }
  return true;
}
