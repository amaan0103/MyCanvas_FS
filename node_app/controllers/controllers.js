const User = require('../models/registerModel')
const Image = require('../models/imageModel')
const Mongoose = require('mongoose')
const express = require('express')
const bcrypt = require('bcrypt')

const signupUser = (req,res)=>{
    const{ name, username, password } = req.body;
    User.find({
        username: username
    },async (err, prev)=>{
        if(err){
            res.send(err);
        }
        else if(prev.length>0){
            res.send({
                success: "false",
                message: "username is already taken"
            })
        }
        else{
            const newUser = new User();
            newUser.name = name;
            newUser.username = username;
            //newUser.password = newUser.generateHash(password);
            const salt = await bcrypt.genSalt(10);
            newUser.password = await bcrypt.hash(password, salt);
            //console.log(newUser.name+" : "+newUser.username+" : "+newUser.password);
            newUser.save().then(data => {
                res.status(200).json(data);
            }).catch(error => {
                res.send("errrrr")
            })
        }
    })
}

const loginUser = async (req, res) => {
    const{ username, password } = req.body;
    await User.findOne({
        username: username
    },async function(err, prev){
        if(err){
            res.send(err);
        }
        else if(prev.length==0){
            res.send({
                success: "false",
                message: "invalid username"
            })
        }
        else{
            const validPassword = await bcrypt.compare(password, prev.password);
            if(validPassword){
                res.send({
                    success: "true",
                    message: "logged in successfully"
                })
            }
            else{
                res.send({
                    success: "false",
                    message: "password mismatch"
                })
            }
        }
    }).clone().catch(function(err){ console.log(err)})
}

const getImages = (req,res) => {
    var images = {};
    Image.find({}, (err,data) => {
        if(err){
            return res.send(err);
        }
        images[data.username] = data;
    });
    res.send(images);
}

module.exports = { signupUser, loginUser, getImages};