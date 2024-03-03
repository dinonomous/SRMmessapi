const express = require('express');
const app = express();
const port = 3000;

// Set the timezone to Indian Standard Time (IST)
process.env.TZ = 'Asia/Kolkata';

// Import routes
const routes = require('./routes/index');

// Use routes
app.use('/', routes);

app.listen(port, () => {
    console.log(`App is listening on ${port}`);
});
