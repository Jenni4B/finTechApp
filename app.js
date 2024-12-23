

const express = require('express');
const app = express();

app.set('view engine', 'ejs'); // Sets EJS as a template
app.set('views', './views')

app.get('/', (req, res) => { // get route to dashboard 
    // try:
        // find transactions in database and list them

        // res.render(insert stuff)

    // catch:
    //      an error statement, console.log
});

// Test DB connection


