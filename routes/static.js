
const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    res.render('home');
});


module.exports = routes;  // Export the router so that it can be used in other files.