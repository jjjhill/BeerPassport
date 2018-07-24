var db=require('../dbconnection'); 

var Retrieve={

  getAllBeers:function(callback) {
    return db.query("SELECT * FROM beers", callback);
  },

  getBeerById:function(id, callback) {
    return db.query("SELECT * FROM beers WHERE id=" + id, callback)
  },

  getBeersByBreweryId:function(id, callback) {
    return db.query("SELECT * FROM beers WHERE breweryId = " + id)
  },

  getAllBreweries:function(callback) {
    return db.query("SELECT * FROM breweries", callback);
  },

  getBreweryById:function(id, callback) {
    return db.query("SELECT * FROM breweries WHERE id=" + id, callback)
  },

};
 module.exports=Retrieve;
