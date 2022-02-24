import { MensagemService } from "../MensagemService";

describe("MensagemService", () => {
  const mensagemService = new MensagemService();
  test("Deve retornar uma string com os devidos números", async () => {
    const mensagem = await mensagemService.gerarMensagemParaUsuario(
      45,
      [1, 3, 5, 9, 15, 45],
      [3, 5]
    );

    expect(mensagem).toBe(
      `Número de Entrada: 45\nNúmeros divisores: 1,3,5,9,15,45\nDivisores Primos: 3,5`
    );
  });
});
