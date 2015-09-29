var express    = require('express');
var bodyParser = require('body-parser');

var app = express();
var routes = require('./routes/swords');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var swords = require('./routes/swords');

app.use('/api/swords', routes);
app.use('/', routes);

app.listen(process.env.PORT || 8080);
console.log('Woot, server started');