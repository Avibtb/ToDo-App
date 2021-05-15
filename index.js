//import express
const express = require('express');
const app = express();

//allocating port for the server
const port = 8000;

//database 
const db =  require('./config/mongoose');

//Starting the server
app.listen(port, function(err){
    if(err){
        console.log(`Error in runnig the server${err}`);
        return;
    }
    console.log(`Server is successfully running at port : ${port}`);
});