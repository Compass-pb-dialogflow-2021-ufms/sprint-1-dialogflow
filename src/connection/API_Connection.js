const axios = require('axios')

const API_URL = 'https://api.nytimes.com/svc/books/v3/lists'
const API_KEY = 'w8q7TsfJ0s3kCYaAHTc3lhCNDmOg3Kpo'

const API = axios.create({
    baseURL: API_URL,
    key: API_KEY
})

module.exports = API