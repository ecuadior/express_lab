const express = require('express');

const router = express.Router();

router.get('/',(req,res)=> 
{
    res.send('User List');
});  
router.get('/new',(req, res)=>
{
    res.send('New User Form');
}); 
router.post('/',(req,res)=>{
    
});
//router.get('/:id',(req,res)=>{
//   res.send(`Getting User Data: ${req.params.id}`);
//});

router.route("/:id").get((req,res)=>{
    res.send(`Getting User Data: ${req.params.id}`);
}).delete((req,res)=>{
    res.send(`Deleting user with id: ${req.params.id}`);
}).put((req,res)=>{
    res.send(`Updating user with id: ${req.params.id}`);
});
const users = [{name:"George"},{name:"Yess"}];
router.param("id",(req, res, next, id)=>{
    console.log(`Accesing user #${id}`);
    next();
});

module.exports =router;