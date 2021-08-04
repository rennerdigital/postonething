const express = require('express');
const router = express.Router()
const usersCtrl = require('../../controllers/users.js');

// Public
router.post('/signup', usersCtrl.signup)
router.post('/login', usersCtrl.login);

// Protected

module.exports = router;