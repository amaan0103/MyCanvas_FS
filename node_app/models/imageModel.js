const Mongoose = require('mongoose')

const imageSchema = Mongoose.Schema({
    name: {
        type: String,
        default: ""
    },
    desc: {
        type: String,
        default: ""
    },
    img:
    {
        data: Buffer,
        contentType: {
            type: String,
            default: 'image/png'
        }
    }
}); 

module.exports = Mongoose.model('Image',imageSchema);