const express = require('express')
const router = express.Router()
const { signupUser, loginUser, getImages } = require('../controllers/controllers')

router.post('/signup', signupUser);
router.post('/login',loginUser);
router.get('/home',getImages);
router.get('/test',(req,res)=>{
    res.send({
        success: "true",
        message: "started"
    })
})
module.exports = router;