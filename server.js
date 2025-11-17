const express = require('express');
const userRouter = require('./routes/users');
const postRouter = require('./routes/posts');
const app = express(); //Calling this function set up server
app.set('view engine', 'ejs');
// app.use(logger); // placment determine what it logs
app.use('/users', userRouter);
app.use('/posts',postRouter);


app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=> //route 
    {
        console.log('Here');
        res.render("index",{user:"George"});
        //res.status(500).send("Hellow World");
        //res.download('server.js'); start donwload when user refresh
    });// this function will run whne someone go to the root folder

app.get('/new',(req,res)=>
{
    res.render('users/new', {firstName: "Please enter name"});
});



app.listen(3030);//port im running at 

function logger(req,res,next){
    console.group(`Page Accessed: ${req.originalUrl}`);
    next();
}
