const router = require("express").Router();
const Post = require("../models/Post")
const postsCtrl = require(../../controllers/posts.js)

// Public
router.post('/user', postsCtrl.create)
router.put('/user', usersCtrl.update)
router.delete('/user', usersCtrl.delete);

// Protected

