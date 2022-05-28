const express = require('express')
const router = express.Router()
//const imgModel = require('../models/imageModel')
const { signupUser,
        loginUser, 
        //getImages, 
        //getDrawingApp,
        getDrawings,
        postDrawing,
        launchApp
} = require('../controllers/controllers')
const imgModel = require('../models/imageModel');
var multer = require('multer');
  
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
  
var upload = multer({ storage: storage });

router.delete('/deleteAll', async(req,res) => {
    const temp = await imgModel.deleteMany({});
    res.send(temp);
})

router.post('/signup', signupUser);
router.post('/login',loginUser);
router.post('/postDrawing',upload.single('image'),postDrawing);
router.post('/save',postDrawing);
router.get('/getDrawings/:username',getDrawings);
router.get('/launchApp/:username',launchApp);

//router.get('/home',getImages);
//router.get('/draw',getDrawingApp);
// router.get('/test',(req,res)=>{
//     res.send({
//         success: "true",
//         message: "started"
//     })
// })


module.exports = router;