const express = require('express');
const app = express(); //Calling this function set up server
app.set('view engine', 'ejs');

app.get('/',(req,res)=>
    {
        console.log('Here');
        res.render("index");
        //res.status(500).send("Hellow World");
        //res.download('server.js'); start donwload when user refresh
    });// this function will run whne someone go to the root folder

app.listen(3030);//port im running at 

