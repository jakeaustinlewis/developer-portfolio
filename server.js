'use strict';

let express = require('express');
let path = require('path');
let app = express();
let port = process.env.PORT || 3000;

let methodOverride = require('method-override');

let morgan = require('morgan'); //Morgan is used for logging request details.
let bodyParser = require('body-parser');



let index = require('./routes/index');

app.disable('x-powered-by'); //Sets the Boolean setting name to false
// app.use(express.static('public'));


app.use(methodOverride('_method'));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(morgan('short'));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static('./public'));


app.use(index);

app.use((req, res) => {
    res.sendStatus(404);
});

app.use((err, req, res, next) => {
    if (err.status) {
        return res
            .status(err.status)
            .set('Content-Type', 'text/plain')
            .send(err.message);
    }

    console.error(err.stack);
    res.sendStatus(500);
});

app.listen(port, function () {
    console.log('Listening on port', port);
});

module.exports = app;