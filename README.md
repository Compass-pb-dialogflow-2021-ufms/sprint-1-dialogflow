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

<h3>Como a avaliação foi feita</h3>
<b>Foi escolhida a API do viaCEP que basicamente retorna os dados da localização requerida a partir do CEP. Para a realização do projeto utilizei o express, o path e o axios.</b>

<h4>Como utilizar o sistema</h4>
<b>A forma de usar é bastante simples, basta escrever o CEP na caixa e clicar no botão de enviar, que ele abrirá uma outra página html com o retorno das informações requeridas e caso o usuário deseje realizar outra busca, basta clicar no "Pesquisar outro CEP". Cabe citar que o CEP possui uma validação, aceitando só números e exatamento 8 dígitos.</b>