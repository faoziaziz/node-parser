/* for database connection */
/*
mysql -u prasimax -p'AtE0T8EXAV5k8prksf5z' -h 10.100.41.50 -P 3306 -D prasimax_dev
*/
var mysql =require('mysql');

var con=mysql.createConnection({
    host: '10.100.41.50',
    user: 'prasimax',
    password: 'AtE0T8EXAV5k8prksf5z',
    database: 'trumon'

});


con.connect(function(err){
    if(err) throw err;

});

module.exports = con;
