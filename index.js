//import express
const express = require('express');
const app = express();

//allocating port for the server
const port = 8000;

//using body parser for parsing the data
app.use(express.urlencoded({extended:true}));

//database 
const db =  require('./config/mongoose');

//rendering ejs 
app.set('view engine', 'ejs');
app.set('views' ,'./views/main.ejs');

//Starting the server
app.listen(port, function(err){
    if(err){
        console.log(`Error in runnig the server${err}`);
        return;
    }
    console.log(`Server is successfully running at port : ${port}`);
});