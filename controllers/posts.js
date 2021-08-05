const Post = require('../models/post');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = {
    create,
    login
  };

  router.post("/user", async (req,res)=>{
    const newPost = new Post(req.body)
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch(err){
        res.json(err)
    }
})

router.put("/user", async (req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.updateOne({ $set:req.body });
            res.status(200).json("Post Updated!")
        }else{
            res.status(403).json("You can only update your own posts!")
        }
    } catch(err){
        res.status(500).json(err);
    }
})

router.delete("/:id", async (req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.deleteOne();
            res.status(200).json("Post Deleted!")
        }else{
            res.status(403).json("You can only delete your own posts!")
        }
    } catch(err){
        res.status(500).json(err);
    }
})
