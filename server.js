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

mongoose.connect('mongodb://127.0.0.1/test',{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    family: 4,
},function (err) {
    if(err){console.log(err)    
}else{
    console.log('conectado ao mongoDB')
}
})

app.listen(5000, function() {
    console.log('Server on port 5000')
})