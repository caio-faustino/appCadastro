const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.get('/', function(req,res) {
    res.json({message:'Hello Turma'});
});

mongoose.connect('mongodb://localhost:27017/test');

app.listen(5000, function() {
    console.log('Server on port 5000')
})