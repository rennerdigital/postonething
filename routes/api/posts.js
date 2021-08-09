const express = require('express');
const router = express.Router()
const Post = require("../../models/post");
const postsCtrl = require("../../controllers/posts.js")

// Public
router.post('/create', postsCtrl.create)
router.put('/update/:id', postsCtrl.update)
router.delete('/del/:id', postsCtrl.delete)
router.get('/all', postsCtrl.getAllPosts)
router.get('/posts/:userId', postsCtrl.getUserPosts)

// Protected

module.exports = router;