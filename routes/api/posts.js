const express = require('express');
const router = express.Router()
const Post = require("../../models/post");
const postsCtrl = require("../../controllers/posts.js")

// Public
router.post('/user', postsCtrl.create)
router.put('/user', postsCtrl.update)
router.delete('/user', postsCtrl.delete);

// Protected

module.exports = router;