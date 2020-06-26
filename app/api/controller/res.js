'use strict';

exports.ok = function(values, res) {
    /* this is will respon ok */
    var data = {
	'status': 200,
	'values': values

    };

    res.json(data);
    res.end();
}

exports.mantaps = function(values, res){
    if(values==0){
	var data = {
	    'kode': values,
	    'pesan': 'OK'
	}
	res.json(data);
	res.end();
    }
    else if(values==1){
	
	var data = {
	    'kode': values,
	    'pesan': 'Error'
	}
	
	res.json(data);
	res.end()
    }

}
