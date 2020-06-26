/*
  author : aziz amerul Faozi
  description : this code just for parser api
*/

var options={
    inflate: true,
    limit: '100kb',
    type: 'application/octet-stream'

};

var express = require('express'),
    app = express(),
    port = process.env.PORT|| 7269,
    bodyParser = require('body-parser'),
    path = require('path'),
    controller = require('./app/api/controller/controller');





var viewPath=path.join(__dirname, 'app/views');

app.set('views', viewPath);


/* for setting view engine */
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

/* setting routes */
var routes = require('./app/api/routes/routes');
routes(app);

app.listen(port);
console.log('api untuk parsing' +port);
