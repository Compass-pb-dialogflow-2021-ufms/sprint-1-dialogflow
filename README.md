# Avaliação Sprint 1

<h2>Execução</h2>
<ul>
  <li>Escolher uma API pública (https://any-api.com/, ou qualquer outra);</li>
  <li>Consumir essa API através do nodejs;</li>
  <li>Criar uma página html para fazer consultas pela API;</li>
  <li>Subir como uma aplicação no Heroku (https://www.heroku.com/). Dica: https://elements.heroku.com/buttons/orangemug/heroku-docker-nodejs</li>
</ul>

<h2>Entrega</h2>
<ul>
  <li>Aceitar o convite do repositório da sprint-1-pb-ufms;</li>
  <li>Criar uma branch no repositório com o formato nome-sobrenome (Exemplo: daniel-muller);</li>
  <li>Subir o trabalho na branch com um readme.md, documentando detalhes sobre como a avaliação foi desenvolvida e como utilizar o sistema.</li>
</ul>
<b>O prazo de entrega é até às 13h do dia 16/11 no repositório do github (https://github.com/Compass-pb-dialogflow-2021-ufms/sprint-1-dialogflow).</b>
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Eu escolhi a API viacep que recebe um CEP e retorna o endereço correspondente, utilizei a API para preencher um formulário dinamicamente.
Para realizar o trabalho utilizei Fetch API para consumir API através das promises.

Como utilizar:
Clonar o projeto em sua maquina, abrir o index html no navegador(indicação de extensão no VScode: techer.open-in-browser) = abrir com shift + Alt + B.
Basta escrever o CEP, somente os números, ou se preferir pode colocar o hífen " - ".
Exemplos: 79060010 ou 79060-010.
Após digitar o Cep, aperte a tecla TAB e o formulário será preenchido com o restante do endereço correspondente.

