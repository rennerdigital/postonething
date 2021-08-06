const express = require('express');
const router = express.Router()
const Post = require("../../models/post");
const postsCtrl = require("../../controllers/posts.js")

// Public
router.post('/create', postsCtrl.create)
router.put('/user/update', postsCtrl.update)
router.delete('/user/del', postsCtrl.delete);

// Protected

module.exports = router;