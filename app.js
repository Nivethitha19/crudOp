require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require("./db/conn");
const users = require("./models/userSchema");

const cors = require('cors');
const router = require("./routes/router");
const DB = "mongodb+srv://Nivethitha:83Hh-Gm_SP4WBQj@cluster0.4tn5tmz.mongodb.net/mernstack?retryWrites=true&w=majority"

const port = 8000;

app.use(cors());
app.use(express.json());

app.use(router);

app.listen(port,()=>{
    console.log(`server started at ${port}`)
});