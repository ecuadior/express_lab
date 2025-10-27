const express = require('express');
const app = express(); //Calling this function set up server

app.get('/',(req,res)=>
    {
        console.log('Here');
        res.send("Hello World!");
    });// this function woill run whne someone go to the root folder

app.listen(3030);

