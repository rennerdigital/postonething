const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema(
{
        userId:{
        type:String,
        required:true,
        },
        title:{
            type:String,
            max:1000,
            required: true
        },
},
    { timestamps: true }

);

module.exports = mongoose.model("Post", PostSchema);