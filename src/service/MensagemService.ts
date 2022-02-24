export class MensagemService {
  async gerarMensagemParaUsuario(
    numeroEscolhido: number,
    numerosDivisores: number[],
    numerosPrimos: number[]
  ): Promise<String> {
    const mensagem = `Número de Entrada: ${numeroEscolhido}\nNúmeros divisores: ${numerosDivisores}\nDivisores Primos: ${numerosPrimos}`;

    return mensagem;
  }
}
