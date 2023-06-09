const express = require('express');
const bodyParser = require('body-parser')
const app = express()
require('dotenv').config()

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var route = require("./route");
route(app);

const port = process.env.PORT 
const host = process.env.DB_HOST 

app.use('/auth', require('./userapi/userrouter'));

app.listen(port, () => {
    console.log(`Server started on ${port} and running at host ${host}`);
});