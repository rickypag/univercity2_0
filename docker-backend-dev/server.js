const express = require('express');
const app = express();

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';



// App
const documentRouter = require('./routes/documents.js');

app.use(documentRouter);


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);