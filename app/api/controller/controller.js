

'use strict';

/* controller to store NeiraDataTransaction */

var response=require('../controller/res')
var connection=require('../conn');
var stream =require('stream');


/* ternyata butuh mysql lagi untuk escape*/
var mysql = require('mysql');

exports.index = function(req, res){
    /* return to index */
    response.ok("testing neiraApp", res);
};


exports.updateFlag= function (seqNum, flagValue) {

    /* 
       update flag in NeiraRecv with flagValue 
       dalam bagian ini, di bagian ini akan menunjukkan 
       bahwa data ditulis oleh nodejs api

    */
    
    console.log("SeqNum : "+seqNum+", flagValue : "+flagValue);

}
exports.parserFunct = async function(req, res){

    var total = req.body.total;
    var serialnumber = req.body.serialnum;
    var qr = req.body.qr;

    /* write to database NeiraParsed */
    
    connection.connect(function(err){
	var sql = "insert into NeiraParsed_2(DeviceId, TotalTrans, Content) values (?)";
	var values = [serialnumber, total, qr];

	connection.query(sql, [values], function(err, result){
	    if (err) throw err;
	    console.log('record inserted');
	});

	

    });

    var data_response={
	'status': 'coba',
	'value': 1,
	'total': total,
	'serialnumber': serialnumber,
	'qr': qr

    }

    res.json(data_response);
    res.end();

}

exports.writeToParsed = async function (total, qr, req, res){

    /*
      ini merupakan fungsi untuk menuliskan kedalam 
      tabel parsed.
    */
    var status_response='OK';
    var values_response=1;
    var deviceid='867584030375641';
    var parsermode = 2;
    


    /* get pattern from database table  */
    /* for get variable pattern */
    let log = await findPattern(deviceid, parsermode);

    console.log(req.body);

    /* send response status */
    var data_response = {
	'status': status_response,
	'patternnilai': log[0].PatternNilai
    }

    

    res.json(data_response);
    res.end();

    

    

    /* combine it with data*/

    

    

}

/* mengatasi callback hell dengan await dan async */

function findPattern(SerialNumber, ParserMode){
    return new Promise(resolve=>{
	
	var query= 'select * from devicetable where SerialNumber =? and ParserMode=?';
	connection.query(query,[SerialNumber, ParserMode], function (error, rows, fields){
	    /* connection query */
	    if (error){
		console.log(error);

	    } else {
		resolve(rows);

	    }

	});
    });

}

