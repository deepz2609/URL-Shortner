const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true,
    },

    redirectUrl: {
        type: String,
        required: true,
    },

    visitHistory:[{timestamp:{type:Number}}],
},
{
    timestamps: true
}
);

const URL = mongoose.model('url', urlSchema);

module.exports = URL;   // Export the model so that it can be used in other files.