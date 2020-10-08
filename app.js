const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Prueba compucloud')
})

app.get('/' , (req, res) => {
    res.send('Webinar de AWS para developers!')
})

app.get('/health', (req, res) => {
    res.send('Todo funciona OK!')
})

app.listen(3000, () => {
    console.log('Server is up on 3000')
})