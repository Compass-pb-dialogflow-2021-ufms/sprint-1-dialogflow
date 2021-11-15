<h1>Projeto Sprint 1</h1>
Utilizando a API <a href="https://www.football-data.org/">Football-data.org</a> foi desenvolvido uma página que devolve os próximos jogos dos principais campeonatos de 
futebol do mundo. 
  <h3>Arquivos e suas funções:</h3>
  <li><a href="https://github.com/Compass-pb-dialogflow-2021-ufms/sprint-1-dialogflow/blob/denner-basilio/Front/index.html">index.html</a> : Onde está o select no qual onde o usuário pode escolher de qual campeonato ele quer ver os próximos jogos. </li>
  <li><a href="https://github.com/Compass-pb-dialogflow-2021-ufms/sprint-1-dialogflow/blob/denner-basilio/Front/script.js">script.js</a> : Possui a função selectComp() que através da fetch, realiza requisições a API interna e também possui a função show() que introduz as respostas das requisições bem sucedidas no html. </li>
  <li><a href="https://github.com/Compass-pb-dialogflow-2021-ufms/sprint-1-dialogflow/blob/denner-basilio/server.js">server.js</a> : API interna que com o auxílio do Express(Framework) e o Axios(módulo de node) realiza requisições a API externa(<a href="https://www.football-data.org/">Football-data.org</a>) além disso é responsável por renderizar o HTML. </li>
  
  
  <h3>Como Funciona o Sistema :</h3>
  Na página <a href="https://github.com/Compass-pb-dialogflow-2021-ufms/sprint-1-dialogflow/blob/denner-basilio/Front/index.html">index.html</a> possui um 
  select onde o usuário pode escolher de qual campeonato ele quer ver os próximos jogos. A opção escolhida é enviada para a função selectComp() - presente no arquivo
  <a href="https://github.com/Compass-pb-dialogflow-2021-ufms/sprint-1-dialogflow/blob/denner-basilio/Front/script.js">script.js</a> - através de um evento click adicionado a um input "type=button", que está junto ao select. Esta função por meio de uma fetch faz requisição a uma API(<a href="https://github.com/Compass-pb-dialogflow-2021-ufms/sprint-1-dialogflow/blob/denner-basilio/server.js">server.js</a>) criada por mim com auxílio do Express. Logo a API interna, com assistência do Axios, realiza uma requisição a API externa, e a mesma devolve a resposta para a função show() preencher o html. Desse modo, API interna é responsável por proceder a comunicação entre FRONT E BACKEND.
  <br>
<h6>Link para acessar o projeto no Heroku: </h6> https://projeto-sprint-one.herokuapp.com/
