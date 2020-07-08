const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("punci");
});

const port = 8080;

app.listen(port, () => {
    console.log(`A Node API a ${port}-as porton figyel.`);
});