# Calcular divisores e seus números primos.

Um cliente precisa de um sistema que seja capaz de decompor um número em todos os seus divisores, enumerando também aqueles que forem primos.

● Dado um número de entrada, o programa deve calcular todos os divisores que compõem o número.

● Dado um número de entrada, o programa deve calcular todos os divisores primos que compõem o número.

Exemplo de Console:

    Digite um número: 45

Após o usuário digitar o número, Console pode mostrar:

    Número de Entrada: 45

    Números divisores: 1 3 5 9 15 45

    Divisores Primos: 1 3 5

## Quick start

Pré requisito: instalar o [NodeJs](https://nodejs.org/en/)

1.  Clone the project.

```
$ git clone https://github.com/FelipeTHE12/fwk

```

2.  instalar as dependências

```
$ npm install

```

3. 1 Rodar o Projeto Linha de Comando

```
$ npm run calculator
```

4. Rodar o projeto API/Swagger - http://localhost:8080/api-docs/

```
$ npm run dev
```

5.Consumir em um client postman/imsonimia - http://localhost:8080/calcular?numero=45

Rodas testes

- `npm run test`
- `npm run test-coverage`

## Tecnologias usadas

-NodeJs
-Express
-TypeScript
-Jest
-Supertest
-Yup
-Swagger/OpenAPI 3
-Winston
