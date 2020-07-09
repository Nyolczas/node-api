const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require("morgan");
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
dotenv.config()

//connect with db
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });
//.then(() => console.log("Sikeres kapcsolódás az adatbázishoz."));

mongoose.connection.once('open', () => console.log("Sikeres kapcsolódás az adatbázishoz.")).on('error', (err) => {
    console.log(`DB kapcsolódási hiba: ${err}`)
})

// bring in routes
const postRoutes = require('./routes/post');

// middleware 
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/', postRoutes);

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`A Node API a ${port}-as porton figyel.`);
});