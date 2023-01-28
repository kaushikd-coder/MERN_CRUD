require("dotenv").config();
const express = require('express');
const app = express();
const port = 3001;


const users = require("./models/userSchema");
require("./db/conct");

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

