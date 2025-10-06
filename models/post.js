const mongose = require("mongoose");

const postSchema = mongose.Schema({
    title: String,
    message: String,
    creator: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
})
module.exports = mongose.model("Post", postSchema);