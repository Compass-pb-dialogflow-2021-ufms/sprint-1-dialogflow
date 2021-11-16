// Dependências da aplicação
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();

// Configuração do pacote dotenv
require("dotenv").config();

// Setando a chave API da OpenWeatherMap
const apiKey = `${process.env.API_KEY}`;

// Configurado o express e o body-parser
// Configurando o view engine para páginas estáticas a partir da pasta public
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index", { weather: null, error: null });
});

app.post("/", function (req, res) {
  // Pega o nome da cidade informado
  let city = req.body.city;

  // Buscando os dados na Api com o nome da cidade
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  request(url, function (err, response, body) {
    if (err) {
      res.render("index", {
        weather: null,
        error: "Erro inesperado, tente novamente!",
      });
    } else {
      let weather = JSON.parse(body);

      console.log(weather);

      if (weather.main == undefined) {
        res.render("index", {
          weather: null,
          error: "Erro inesperado, tente novamente!",
        });
      } else {
        let place = `${weather.name}, ${weather.sys.country}`,
          weatherTemp = `${weather.main.temp}`,
          weatherPressure = `${weather.main.pressure}`,
          weatherIcon = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
          weatherDescription = `${weather.weather[0].description}`,
          humidity = `${weather.main.humidity}`,
          clouds = `${weather.clouds.all}`,
          visibility = `${weather.visibility}`;

        // renderização dos dados na index.ejs
        res.render("index", {
          weather: weather,
          place: place,
          temp: weatherTemp,
          pressure: weatherPressure,
          icon: weatherIcon,
          description: weatherDescription,
          humidity: humidity,
          clouds: clouds,
          visibility: visibility,
          error: null,
        });
      }
    }
  });
});
// Porta que o server será carregado e aviso para o terminal.

const port_number = (process.env.PORT || 3000);
app.listen(port_number, () => {
  console.log("Tempo Agora está funcionando na porta 3000!");
});
