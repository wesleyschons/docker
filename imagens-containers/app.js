const express = require('express')
const app = express()
const port = 3030

app.get('/', (req, res) => {
    res.send('Olá minha imagem!')
})

app.listen(port, () => {
    console.log(`Executando na porta: ${port}`)
})