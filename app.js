require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 3001;
require("./db/connc")
const User = require("./models/userSchema");

app.get("/", (req,res) => {
    res.send("Hello World");
})

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
})