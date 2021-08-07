const express = require('express');
const router = express.Router()
const Post = require("../../models/post");
const postsCtrl = require("../../controllers/posts.js")

// Public
router.post('/create', postsCtrl.create)
router.put('/update', postsCtrl.update)
router.delete('/del', postsCtrl.delete)
router.get('/all', postsCtrl.getAllPosts)

// Protected

module.exports = router;