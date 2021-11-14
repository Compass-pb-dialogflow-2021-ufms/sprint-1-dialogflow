const express = require('express')
const API = require('./connection/API_Connection')

const app = express()
const router = express.Router()
const path = require('path')

app.set('views', path.join(__dirname, 'view'))
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)

app.get('/', (req, res) => {
    res.render('home.html', {
          titles        : ''
        , authors       : ''
        , descriptions  : ''
        , ranks         : ''
        , num           : ''
        , msgmTitulo    : ''
        , msgmAutor     : ''
    })

})

app.get('/resultado', async (req, res) => {
    try {
        const genero = req.query.genero
        const titulo = req.query.titulo
        const autor = req.query.autor

        const {data} = await API.get(`/${genero}.json?api-key=${API.defaults.key}`)
        const booksData = data.results.books

        const books = []
        let msgmAutor = ''
        let msgmTitulo = ''

        if (autor) {
            for (let x = 0; x < booksData.length; x++) {
                if (booksData[x].author == autor) {
                    books.push(booksData[x])
                }
            }
            if (books.length == 0) {
                msgmAutor = 'Autor nao encontrado !'
            }
        }

        if (titulo) {
            if (books.length != 0) {
                const booksAux = []
                for (let x = 0; x < books.length; x++) {
                    if (books[x].title == titulo) {
                        booksAux.push(books[x])
                    }
                }

                if(booksAux.length != 0) {
                    books.length = 0
                    books.push(booksAux[0])
                }
            } else {
                for (let x = 0; x < booksData.length; x++) {
                    if (booksData[x].title == titulo) {
                        books.push(booksData[x])
                    }
                }
            }

            if (books.length != 1) {
                msgmTitulo = 'Titulo nao encontrado !'
            }
        }

        const titles = []
        const authors = []
        const descriptions = []
        const ranks = []
        if (books.length == 0) {
            for (let x = 0; x < booksData.length; x++) {
                books.push(booksData[x])
            }
        }
        for (let x = 0; x < books.length; x++) {
            titles[x] = books[x].title
            authors[x] = books[x].author
            descriptions[x] = books[x].description
            ranks[x] = books[x].rank
        }

        res.render('home.html', {
              titles        : titles
            , authors       : authors
            , descriptions  : descriptions
            , ranks         : ranks
            , num           : books.length
            , msgmTitulo    : msgmTitulo
            , msgmAutor     : msgmAutor
        })
    } catch (e) {

    }
})

app.use('/', router)

const port = 3000
app.listen(port, () => {
    console.log('API online...')
})