const shortid = require('shortid');
const URL = require('../models/url');
const { json } = require('express');



async function generateShortUrl(req, res) {
    const body = req.body;
    console.log(body);
    if(!body.url) return res.status(400).json({message: 'URL is required'});
    const shortId = shortid(8);
    await URL.create(
        {
            shortId,
            redirectUrl: req.body.url,
            visitHistory: []
        });
       return res.render('home', {id: shortId});

    }

async function redirector(req, res) {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId
    },
    {$push:{visitHistory:
        {
            timestamp: Date.now()
        }
    }});
    res.redirect(entry.redirectUrl);
}

module.exports = {
    generateShortUrl,
    redirector    
}