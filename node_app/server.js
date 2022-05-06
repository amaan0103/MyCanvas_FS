const express = require('express')
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routes = require('./routes/routes')
const imgModel = require('./models/imageModel')
//const cors = require('cors')
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');

dotenv.config()
mongoose.connect(process.env.DATABASE_ACCESS1, () => console.log("Database1 connected"));
//mongoose.connect(process.env.DATABASE_ACCESS2, () => console.log("Database2 connected"));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
  
// Set EJS as templating engine 
app.set("view engine", "ejs");

// var multer = require('multer');
  
// var storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads')
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '-' + Date.now())
//     }
// });
  
// var upload = multer({ storage: storage });
// app.delete('/', async(req,res) => {
//     const temp = await imgModel.deleteMany({});
//     res.send(temp);
// })
// app.get('/', async (req, res) => {
//     const items = await imgModel.find({});
//     res.render('imagesPage',{items : items});
// });
// app.post('/', upload.single('image'), async (req, res, next) => {
 
//   var obj = {
//       name: req.body.name,
//       username: req.body.username,
//       img: {
//           data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
//           contentType: 'image/png'
//       }
//   }
//   let im = new imgModel();
//   im.name = obj.name;
//   im.username = obj.username;
//   im.img = obj.img;
//   const temp = await im.save();
//   //res.redirect('/');
// });
app.use(express.json())
//app.use(cors)
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(express.static(path.join(__dirname, '../drawing_app')));

app.use('',routes)

app.listen(5000, () => console.log("server running"))