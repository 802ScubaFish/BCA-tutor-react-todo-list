const express = require('express')
const app = express()

app.use(logger)

app.get('/', (req, res) => {
    console.log('Home Page')
    res.send('Home Page')
})

app.get('/users', (req, res) => {
    console.log('Users Page')
    res.send('Users Page')   
})

function logger(req, res, next) {
    console.log('before next')
    next()
    console.log('after next')
}

function auth(req, res, next) {
    if (req.query.admin === 'true') {
        req.admin = true
        next()
        return
    }
        res.send('No Auth')
}

app.listen(3000)

