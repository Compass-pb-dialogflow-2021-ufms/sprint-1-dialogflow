const express = require('express')

const app = express()
const router = express.Router()
const path = require('path')

app.set('views', path.join(__dirname, 'view'))
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)

app.get('/', (req, res) => {
    res.render('home.html', { resultado: '' })
})

app.get('/resultado', (req, res) => {
    res.render('home.html', { resultado: req.query })
})

app.use('/', router)

const port = 3000
app.listen(port, () => {
    console.log('API online...')
})