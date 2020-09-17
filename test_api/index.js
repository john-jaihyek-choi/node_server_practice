const express = require('express');
const fortunes = require('./data/fortunes.json')

const app = express();

const host = 'localhost';
const port = 3000;

app.get('/fortunes', (req, res) => {

    res.json(fortunes);
})

app.listen(port, () => {
    console.log(`Server listening on ${host}:${port}`);
})

