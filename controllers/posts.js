const Post = require('../models/post');

module.exports = {
    create,
    update,
    delete: deleteOne,
    getAllPosts,
    getUserPosts
};

async function create(req, res) {
    const post = await Post.create(req.body);
    res.status(201).json(post);
};

async function deleteOne(req, res) {
    const deletedPost = await Post.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedPost);
}

async function update(req, res) {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedPost);
}

async function getAllPosts(req, res) {
    const allPosts = Post.find({}, function(err, result) {
        if (err) {
          console.log(err);
        } else {
          return res.json(result);
        }
      });
    
    // const allPosts = await Post.(req.params.id, req.body, {new: true});
    res.status(200).json(allPosts);
}

async function getUserPosts(req, res) {
  const { userId } = req.params;
  const userPosts = Post.find({userId}, function(err, result) {
      if (err) {
        console.log(err);
      } else {
        return res.json(result);
      }
    });
  
  // const allPosts = await Post.(req.params.id, req.body, {new: true});
  res.status(200).json(userPosts);
}













































// router.post("/user", async (req,res)=>{
//     const newPost = new Post(req.body)
//     try{
//         const savedPost = await newPost.save();
//         res.status(200).json(savedPost);
//     } catch(err){
//         res.json(err)
//     }
// })

// router.put("/user", async (req,res)=>{
//     try{
//         const post = await Post.findById(req.params.id);
//         if(post.userId === req.body.userId){
//             await post.updateOne({ $set:req.body });
//             res.status(200).json("Post Updated!")
//         }else{
//             res.status(403).json("You can only update your own posts!")
//         }
//     } catch(err){
//         res.status(500).json(err);
//     }
// })

// router.delete("/:id", async (req,res)=>{
//     try{
//         const post = await Post.findById(req.params.id);
//         if(post.userId === req.body.userId){
//             await post.deleteOne();
//             res.status(200).json("Post Deleted!")
//         }else{
//             res.status(403).json("You can only delete your own posts!")
//         }
//     } catch(err){
//         res.status(500).json(err);
//     }
// })
