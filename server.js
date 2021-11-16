import express from "express"
import * as path from "path"
import axios from "axios"


const __dirname = path.resolve()


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("pages"))


app.get("/", (request, response) =>
{   
    response.sendFile(path.join(__dirname + "/pages/index.html"))
})


app.post("/meuCEP", (request, response) =>
{
    const data = request.body
    const dataObject = JSON.parse(JSON.stringify(data))
    const CEP = dataObject.CEP
    axios.get(`https://viacep.com.br/ws/${CEP}/json`)
        .then((success) =>
        {
        const dataCEP = success.data
        response.send(`
            <!DOCTYPE html>
            <html lang="pt-br">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Achar Meu CEP</title>
            </head>
            <body>
                <h2>Endereço: </h2>
                <div id="resultado">
                    <p id="cep">O CEP ${dataCEP.cep} possui as seguintes informacoes:</p>
                    <p id="rua">Rua: ${dataCEP.logradouro}</p>
                    <p id="bairro">Bairro: ${dataCEP.bairro}</p>
                    <p id="cidade">Cidade: ${dataCEP.localidade}</p>
                    <p id="estado">Estado: ${dataCEP.uf}</p>
                    <a href="/">Pesquisar outro CEP</a>
            </div>
            </body>
            </html>
        `)
        })
        .catch((error) =>
        {
            console.log(error)
            response.end()
        })
})


app.listen(process.env.PORT, () => console.log("Servidor rodando!"))