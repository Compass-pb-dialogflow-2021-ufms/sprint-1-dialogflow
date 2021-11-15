import fetch from "node-fetch";

const chaveDeAcesso = "33ce7b4ff8a9b2d8271fb95a9477b973";
const endpoint = "http://api.weatherstack.com";

function obterClima(local) {
  return fetch(`${endpoint}/current?access_key=${chaveDeAcesso}&query=${local}`)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      }

      throw response;
    })
    .then((data) => data)
    .catch((error) => error.json().then((data) => data));
}

export { obterClima };
