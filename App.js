const express = require('express')
const app = express()
const port = 3000
const pages = require('./routes/pages');
require('dotenv').config();

app.set('view engine', 'ejs')
app.use('/public', express.static('public'))
app.use(express.urlencoded({ extended: false }));

app.use("/", pages)

app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))