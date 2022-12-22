const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const routes = require("./routes")
const bodyParser = require('body-parser')
const cors = require("cors");

app.use(cors());

app.use(express.json())
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const url = process.env.CONNECT_URL;

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(console.log("Conectado a MongoDb"))
    .catch((err) => console.log(err))

    app.use("/api", routes);


    app.listen("8080 ", () => {
        console.log("backend ejecutandose")
    })