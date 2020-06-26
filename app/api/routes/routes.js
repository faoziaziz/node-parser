'use strict';

var response = require('../res');
var stream = require('stream');

//middleware for form/file upload

module.exports = function(app){

    var todoList = require('../controller/controller');
    var parserCont = require('../controller/parser');


    /* index */
    app.route('/')
	.get(todoList.index);


    /* push data */
    app.post('/pushdata', function(req, res){
	/* declare variable */

	todoList.writeToParsed(11, 2, req, res);

    });

    app.post('/parser', function(req, res){
	/* get the data list */

	todoList.parserFunct(req, res);
    });

    app.get('/pushdata', function(req, res){
	
	res.render('pages/doc');
	
    });


    /* router to get the parser api*/

    app.get('/doc', function(req, res) {
	res.render('pages/doc');

    });


}
