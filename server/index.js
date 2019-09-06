
require("dotenv").config()
const express = require("express")
const controller = require("./controller");
const app = express();
const massive = require("massive")



app.use(express.json());


app.listen(4000, () => {
    console.log("server listening on port 4000")
});