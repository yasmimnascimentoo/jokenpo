# JOKENPO


#### Desafio realizado seguindo as regras estabelecidas pelo site [Dojo Puzzles](https://dojopuzzles.com/problems/jokenpo/)

### Sobre o projeto

- Ultiliza **NodeJs**;
- Node **v16.14.2**
- Libs:
  - [x] cors -> Acesso pelo front;
  - [x] config -> Caminho ao `.env`;
  - [x] consign -> Encaminha os arquivos especificados de maneira automática;
  - [x] express -> Sobe o servidor;
  - [x] nodemon -> Utilizado durante todo o desenvolvimento;
  - [x] Jest -> TU;
  - [x] Supertest -> Teste de aplicação;
- CI;
- CI usando a pipeline do github actions, em merges da branch master, para testes automatizados;
- Utiliza a cobertura de código do sonarcloud na pipeline de CI(`93%`).
- Conceitos do Git Flow;

### Para rodar o projeto

##Local

1. Clone o repositório Frontend na url github.com/yasmimnascimentoo/jokenpo-web
  - Rode `git checkout master` para mudar de branch.
  - Rode `npm install` para instalar o projeto e suas dependências.
  - Rode `npm start` para iniciar a aplicação.
  - Abra o link(http://localhost:3000/) no navegador.

2. Clone o repositório Backend
  - Rode `git checkout master` para mudar de branch.
  - Rode `npm install` para instalar o projeto e suas dependências.
  - Rode `npm start` para iniciar a aplicação.
  - Abra o link(http://localhost:8080/) no navegador.
  - Observação ao rodar apenas Backend:   
    - Para execução dos comandos é necessário completar a url com `/jokenpo/?plays=value` ou `/jokenpo/?plays=value&play2=value`
    - Exemplo Player vs Bot: http://localhost:8080/jokenpo/?plays=pedra 
    - Exemplo Player vs Player: http://localhost:8080/jokenpo/?plays=pedra&play2=pedra

##Acesso Remoto

1. Acesso pelo heroku ->
  - Frontend da aplicação: https://jokenpo-web.herokuapp.com/
  - Backend da aplicação: https://jokenpoo-api.herokuapp.com/
  - Observação ao rodar apenas Backend:   
    - Para execução dos comandos é necessário completar a url com `/jokenpo/?plays=value` ou `/jokenpo/?plays=value&play2=value`
    - Exemplo Player vs Bot: https://jokenpoo-api.herokuapp.com/jokenpo/?plays=pedra 
    - Exemplo Player vs Player: https://jokenpoo-api.herokuapp.com/jokenpo/?plays=pedra&play2=pedra

### Sobre os Testes

- [x] Parâmetro válido;
- [x] URL válida;
- [x] Rotas do Servidor;
