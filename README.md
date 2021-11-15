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

<b>-------------------------------------------------------------------------------------------------------------------------</b>

<h2>O que foi feito</h2>
<p>Escolhi a API da The New York Times, nela foi possivel fazer uma consulta dos best-sellers, por tanto minha ideia era poder buscar e filtrar esses livros pelo genero, titulo e autor.</p>
<p>No primeiro momento foquei em criar a rota raiz da minha API e todo o corpo do meu html para so entao me preocupar em como receber e enviar dados do back para o front e vice-versa. O que foi bem resolvido ja que utilizei a biblioteca express para gerenciar as requisicoes, tambem utilizei o EJS que me facilitou a manipulacao de Javascript dentro do HTML.</p>
<p>Agora faltava a comunicacao com API da NYT e para isso utilizei o AXIOS, e assim pude enviar requisicoes para a API e com os dados recebidos filtrar com o titulo e autor porem nao sao obrigatorios. O ou os livros obtidos como resultado sao exibidos no html com os atributos titulo, autor, descricao e rank.</p>
<p>Por fim criei o Dockerfile para a criacao do container e fiz o deploy da aplicacao na heroku.</p>

<h2>A Aplicacao</h2>
<p>Optei por nao usar nenhum estilo e por tanto um visual mais simples. Ha tres campos em que o usuario pode filtrar sua pesquisa, um select no qual contem a lista de generos e esta e obrigatoria para pesquisa, titulo e autor que sao inputs textuais e opcionais. Quando clicado no botao Buscar automaticamente a pagina ira carregar o resultado com os parametros informados, caso o titulo ou o autor nao for encontrado a pagina tambem informara um aviso.</p>
<p>A aplicacao pode ser acessada por este <a href="https://sprint-1-teste.herokuapp.com/">link</a>.</p>