require("dotenv").config();
const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');
const router = require("./routes/router");

const users = require("./models/userSchema");
require("./db/conct");

app.use(cors())
app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

