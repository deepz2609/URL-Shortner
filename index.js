const express = require('express');
const urlRoute = require('./routes/url');
const connect = require('./connection');
const URL = require('./models/url');
const path = require('path');
const staticRoute = require('./routes/static');

const app = express();

const port = 8080;

// Connect to the MongoDB database
connect('mongodb://localhost:27017/url-shortener')
  .then(() => {
    console.log('Connected to database');
  });

// Serve static files from the 'index.html' directory
app.use(express.static(path.join(__dirname , 'public')));

// Parse URL-encoded and JSON request bodies
app.use(express.urlencoded( { extended: false }));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



// Handle POST requests to generate short URLs
app.use('/', staticRoute);

app.use('/url', urlRoute);
app.use('/url/:shortId', urlRoute);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port http://127.0.0.1:${port}`);
});

// Export the 'app' object for external use
exports.app = app;