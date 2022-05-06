const User = require('../models/registerModel')
const imgModel = require('../models/imageModel')
const Mongoose = require('mongoose')
const express = require('express')
const bcrypt = require('bcrypt')
const fs = require('fs')
const path = require('path')

const signupUser = async (req,res)=>{
    const{ name, username, password } = req.body;
    await User.findOne({
        username: username
    },async (err, prev)=>{
        if(err){
            res.send({
                success: "false",
                message: "an error occured"
            })
        }
        else if(prev){
            res.send({
                success: "false",
                message: "username is already taken"
            })
        }
        else{
            const newUser = new User();
            newUser.name = name;
            newUser.username = username;
            const salt = await bcrypt.genSalt(10);
            newUser.password = await bcrypt.hash(password, salt);
            await newUser.save();
            res.send({
                success: "true",
                message: "registered successfully"
            })
        }
    }).clone().catch(function(err){ console.log(err)})
}

const loginUser = async (req, res) => {
    const{ username, password } = req.body;
    await User.findOne({
        username: username
    },async function(err, prev){
        if(err){
            res.send({
                success: "false",
                message: "an error occured"
            })
        }
        else if(!prev){
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

/*const getImages = async (req,res) => {
    var images = {};
    await Image.find({}, (err,data) => {
        if(err){
            return res.send(err);
        }
        images[data.username] = data;
    });
    res.send(images);
}

const getDrawingApp = (req,res) => {
    const readStream = fs.createReadStream("../drawing_app/index.html","utf-8");
    readStream.on("data",(chunk)=>{
        res.write(chunk);
        res.end();
    })
     
}*/

const getDrawings = async (req, res) => {
    const items = await imgModel.find({});
    res.render('imagesPage',{items : items});
    //  res.send(items);
}

const postDrawing = async (req, res, next) => {
    var obj = {
        name: req.body.name,
        username: req.body.username,
        img: {
            data: fs.readFileSync(path.join(__dirname + '/../uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    }
    //console.log(path.join(__dirname + '/../uploads/' + req.file.filename))
    let im = new imgModel();
    im.name = obj.name;
    im.username = obj.username;
    im.img = obj.img;
    const temp = await im.save();
    //res.send(temp);
}

module.exports = { signupUser, loginUser, getDrawings, postDrawing};