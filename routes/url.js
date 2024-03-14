const express = require('express');
const { generateShortUrl, redirector } = require('../controllers/url');


const router = express.Router();

router.post('/' , generateShortUrl);
router.get('/:shortId',redirector);



module.exports = router;  // Export the router so that it can be used in other files.