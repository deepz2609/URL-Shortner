const mongoose = require('mongoose');

async function connect(url) {
    return mongoose.connect(url)}

module.exports = connect;  // Export the connect function so that it can be used in other files.