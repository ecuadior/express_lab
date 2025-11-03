const express = require('express');
const app = express(); //Calling this function set up server
app.set('view engine', 'ejs');

app.get('/',(req,res)=> //route 
    {
        console.log('Here');
        res.render("index",{user:"George"});
        //res.status(500).send("Hellow World");
        //res.download('server.js'); start donwload when user refresh
    });// this function will run whne someone go to the root folder

    //creating another pages in the website
app.get('/users',(req,res)=> 
{
    res.send('User List');

});  
app.get('/users/new',(req, res)=>
{
    res.send('New User Form');
}); 
app.listen(3030);//port im running at 

