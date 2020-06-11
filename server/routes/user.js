var express = require("express")
var router = express.Router()
const User = require('../model/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

process.env.SECRET_KEY = 'kdlt'
//Get All User
router.get("/users", (req,res) => {

    User.findAll()
    .then(users => {
        res.json(users)
    })
    .catch(err => {
        res.send(`error: ${err}`)
    })
})

//REGISTER
router.post("/register", (req, res) => {
   
    const userData = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        created: new Date()
    }

    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if(!user){
            const hash = bcrypt.hashSync(userData.password,15)
            userData.password = hash
            User.create(userData)
                .then(user => {
                    let token = jwt.sign(user.dataValues, process.env.SECRET_KEY,{expiresIn: 1400})
                    res.json({token: token})
                })
                .catch(err => {
                    res.send(`error: ${err}`)
                })
                
        }else {
            res.json("User Already Exist")
        }
    })
    .catch(err => {
        res.send(`error: ${err}`)
        console.log(`error: ${err} this is ${req.body.email}`)
    })

})

/*

//Delete User
router.delete("/user/:id", (req,res) => {
    User.destroy({
        where: {
            id: req.body.id
        }
    })
    .then(() =>{
        res.send(`User deleted`)
    })
    .catch(err => {
        res.send(`Error: ${err}`)
    })
})

//Update User
router.put("/user/:id", (req,res) => {
    if(!req.body.username){
        res.status(400)
        res.json({
            error: "Bad Data"
        })
    }else {
        User.update(
            {username: req.body.username},
            {where: {id: req.params.id}}
        )
        .then(() => {
            res.send("Update Successful")
        })
        .catch(err => {
            res.send(`error ${err}`)
        }) 
    }
})
*/
module.exports = router
