const express = require('express');
const app = express();

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';


// App
const documentRouter = require('./routes/documents.js');

app.use(documentRouter);

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error.ejs', {
            message: err.message,
            error: err
        });
    });
}
// production error handler
// no stacktraces leaked to user
else{
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });
}


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);