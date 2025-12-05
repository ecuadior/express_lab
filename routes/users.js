const express = require('express');

const router = express.Router();

router.get('/',(req,res)=> 
{
    // res.send('User List');
    res.render('users/list', { users: users });
});  
router.get('/new',(req,res)=>
{
    res.render('users/new', {firstName: "ENter Name"});
});
// router.get('/new',(req, res)=>
// {
//     res.send('New User Form');
// }); 

router.post('/',(req,res)=>{
    res.send("User Created!"); 
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const gender = req.body.gender;
    const age = req.body.age;
    const isValid = firstName != "" && lastName != "" && age != 0;//Check if they are there,added
    if(isValid)
    {
        console.log(`Adding User ${firstName}`);
        users.push({
            firstName: firstName,
            lastName: lastName,
            gender: gender,
            age: age,
        });
        console.log("New Set of Users: " + `${users}`);
    }
    else{
        console.log("Eroor adding user!");
        res.render("users/new", {firstName:firstName});
    }
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
const users = [
    {
        firstName:"Tony",
        lastName: "yio",
        gender:"Male",
        age: 23,
    }

];
router.param('id',(req, res, next, id)=>{
    console.log(`Accesing user #${id}`);
    next();
});

module.exports =router;