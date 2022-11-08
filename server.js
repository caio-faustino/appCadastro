const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./src/routes');

const app = express();

mongoose.connect('mongodb://localhost:27017/meubanco',{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    family: 4
},function (err) {
        if(err){console.log(err)    
    }else{
        console.log('conectado ao mongoDB')
    }
})

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(routes);

app.listen(5000, function(){
    console.log('Server on port 5000')
});