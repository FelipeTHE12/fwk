import { eNumeroValido } from "./util/eNumeroValido";
import { CalculoService } from "./service/CalculoService";
import { MensagemService } from "./service/MensagemService";

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const calculoService = new CalculoService();
const mensagemService = new MensagemService();

const init = () => {
  rl.prompt();
  rl.question(
    "Olá, qual numero você gostaria de  saber os divisores ?\n Por favor digite o número ou para sair digite 'exit'" +
      "\n",
    async (num) => {
      if (num === "exit") {
        process.exit();
      }

      const numeroEscolhido = Number(num);

      if (eNumeroValido(numeroEscolhido)) {
        const resultados = await calculoService.calcularNumerosPrimosEDivisores(
          numeroEscolhido
        );
        const { numerosDivisores, numerosPrimos } = resultados[0];

        const mensagem = await mensagemService.gerarMensagemParaUsuario(
          numeroEscolhido,
          numerosDivisores,
          numerosPrimos
        );

        console.log(mensagem);
        console.log();
      } else {
        console.log(
          ` Número não valido.\n O número deve ser um inteiro, sem pontos flutuantes, maior que 0 e menor que 1.000.000.000.`
        );
        console.log();
      }
      rl.prompt();

      init();
    }
  );
};

init();
