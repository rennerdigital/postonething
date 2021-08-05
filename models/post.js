const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema(
{
        desc:{
            type:String,
            max:1000
        },
},
    { timestamps: true }

);

module.exports = mongoose.model("Post", PostSchema);