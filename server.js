const express = require("express")
const path = require("path")
const app = express()


app.get("/", (request, response) =>
{
    response.sendFile(path.join(__dirname + "/pages/index.html"))
})


app.listen(4000, () => console.log("Servidor rodando!"))

