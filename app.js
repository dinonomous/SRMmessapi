const express = require('express');
const app = express();
const port = 3000;

const moment = require('moment-timezone');

// Set the desired timezone to Indian Standard Time (IST)
const desiredTimezone = 'Asia/Kolkata'; // Indian Standard Time

// Set the timezone for the application
moment.tz.setDefault(desiredTimezone);

// Import routes
const routes = require('./routes/index');

// Use routes
app.use('/', routes);

app.listen(port, () => {
    console.log(`App is listening on ${port}`);
});