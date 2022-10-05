require('dotenv').config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {

    res.end(process.env.HELLO);
});

app.get("/user", (req, res) =>{

    res.end(process.env.CREDENTIALS);
});

app.listen(3000);
