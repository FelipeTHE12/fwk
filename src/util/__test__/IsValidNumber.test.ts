import { eNumeroValido } from "../eNumeroValido";

describe("IsValidNumber", () => {
  test("hello", () => {
    const a = "hello";
    expect(a).toBe("hello");
  });
  test("Se o número for Inteiro deve retornar true", () => {
    const numValidoTest = eNumeroValido(30);
    expect(numValidoTest).toEqual(true);
  });
  test("Se o número for maior que 1.000.000 deve retornar undefined", () => {
    const numValidoTest = eNumeroValido(1000001);
    expect(numValidoTest).toEqual(false);
  });
  test("Se o número for maior que 1.000.000 deve retornar false", () => {
    const numValidoTest = eNumeroValido(1000001);
    expect(numValidoTest).toEqual(false);
  });
  test("Deve retornar false quando receber o valor 0", () => {
    const numValidoTest = eNumeroValido(0);
    expect(numValidoTest).toEqual(false);
  });
  test("Deve retornar false quando receber um valor float/decimal", () => {
    const numValidoTest = eNumeroValido(30.4);
    expect(numValidoTest).toEqual(false);
  });
  test("Deve retornar false quando o número for abaixo de 0", () => {
    const numValidoTest = eNumeroValido(-1);
    expect(numValidoTest).toEqual(false);
  });
});
