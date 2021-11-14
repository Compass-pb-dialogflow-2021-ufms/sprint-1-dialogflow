const express = require('express')
const API = require('./connection/API_Connection')

const app = express()
const router = express.Router()
const path = require('path')

app.set('views', path.join(__dirname, 'view'))
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)

app.get('/', (req, res) => {
    res.render('home.html', { resultado: '' })
})

app.get('/resultado', async (req, res) => {
    try {
        const genero = req.query.genero
        const titulo = req.query.titulo
        const autor = req.query.autor

        const {data} = await API.get(`/${genero}.json?api-key=${API.defaults.key}`)

        const titles = []
        const authors = []
        const descriptions = []
        const ranks = []
        for (let x = 0; x < data.results.books.length; x++) {
            titles[x] = data.results.books[x].title
            authors[x] = data.results.books[x].author
            descriptions[x] = data.results.books[x].description
            ranks[x] = data.results.books[x].rank
        }

        res.render('home.html', { titles: titles, authors: authors, descriptions: descriptions, ranks: ranks })
    } catch (e) {

    }
})

app.use('/', router)

const port = 3000
app.listen(port, () => {
    console.log('API online...')
})