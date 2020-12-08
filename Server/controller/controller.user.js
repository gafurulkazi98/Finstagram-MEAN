var UserModel = require("../model/model.user");
//const secretKey = require("../secret-key");
var bcrypt = require('bcryptjs');

var registerUser = (req,res) => {
    bcrypt.genSalt(10,(err,salt)=>{
        if(err){
            return res.status(422).json({'error': `Encryption error: ${err}`});
        }
        bcrypt.hash(req.body.password,salt,(err,hashword) => {
            
        });
    })
    const newUser = new UserModel({
        username: req.body.username,
        password: hashword,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    })
    newUser.save((err) => {
        if(err){
            return res.status(422).json({'error': `Registration error: ${err}`});
        }else{
            return res.status(200).json({'registered': true});
        }
    })
}

var validateUsername = (req,res) => {
    UserModel.findOne({username:req.body.username},(err,result) => {
        if(err){
            return res.status(422).json({'error': `Lookup error: ${err}`})
        }
        if(result){
            return res.status(200).json({'username': 'exists'})
        }
        else{
            return res.status(200).json({'username': 'unique'})
        }
    })
}

var validateEmail = (req,res) => {
    UserModel.findOne({email:req.body.email},(err,result) => {
        if(err){
            return res.status(422).json({'error': `Lookup error: ${err}`})
        }
        if(result){
            return res.status(200).json({'email': 'exists'})
        }
        else{
            return res.status(200).json({'email': 'unique'})
        }
    })
}

var loginUser = (req,res) => {

}

var getUserData = (req,res) => {

}



module.exports = {registerUser,validateUsername,validateEmail,loginUser,getUserData}