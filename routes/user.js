const express = require('express');
const router = express.Router();
const { handleUserSignup,handleUserLogin} = require('../controllers/user');

const User = require('../models/user');

router.post('/', handleUserSignup)
router.post('/login', handleUserLogin)


module.exports = router;  // Export the router so that it can be used in other files.