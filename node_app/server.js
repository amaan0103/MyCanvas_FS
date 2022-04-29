const express = require('express')
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routes = require('./routes/routes')
//const cors = require('cors')

dotenv.config()
mongoose.connect(process.env.DATABASE_ACCESS1, () => console.log("Database1 connected"));
//mongoose.connect(process.env.DATABASE_ACCESS2, () => console.log("Database2 connected"));

app.use(express.json())
//app.use(cors)
app.use('/app',routes)

app.listen(5000, () => console.log("server running"))