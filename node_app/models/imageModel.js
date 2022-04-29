const Mongoose = require('mongoose')

const imageSchema = Mongoose.Schema({
    name: {
        type: String,
        default: ""
    },
    username: {
        type: String,
        default: ""
    },
    image:
    {
        data: Buffer,
        contentType: String
    }
});

module.exports = Mongoose.model('Images',imageSchema);