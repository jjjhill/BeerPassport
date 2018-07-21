var mysql=require('mysql');
 var connection=mysql.createConnection({

   host:'yikesdb.cos4tykb4agv.ca-central-1.rds.amazonaws.com',
   user:'jjjhill',
   password:'flames12337',
   database:'WreckedMate',
   port:'3306',

});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!")
});

 module.exports=connection;
