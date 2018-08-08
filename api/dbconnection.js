var mysql=require('mysql');
 var connection=mysql.createPool({

   host:'yikesdb.cos4tykb4agv.ca-central-1.rds.amazonaws.com',
   user:'jjjhill',
   password:'flames12337',
   database:'WreckedMate',
   port:'3306',

});

 module.exports=connection;
