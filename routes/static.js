
const express = require('express');
const routes = express.Router();
const URL = require("../models/url");


routes.get("/", async (req, res) => {
    if (!req.user) return res.redirect("/login");
    const allurls = await URL.find({ createdBy: req.user._id });
    return res.render("home", {
      urls: allurls,
    });
  });

routes.get('/signup', (req, res) => {
    return res.render('signup');
});

routes.get('/login', (req, res) => {
    return res.render('login');
});


module.exports = routes;  // Export the router so that it can be used in other files.