var db=require('../dbconnection'); 

var Retrieve={

  getAllBeers:function(callback) {
    return db.query("SELECT * FROM Beers", callback);
  },

  getBeerById:function(id, callback) {
    return db.query("SELECT * FROM Beers WHERE id=" + id, callback)
  },

  getBeersByBreweryId:function(id, callback) {
    return db.query("SELECT * FROM BEERS WHERE breweryId = " + id)
  },

  getAllBreweries:function(callback) {
    return db.query("SELECT * FROM Breweries", callback);
  },

  getBreweryById:function(id, callback) {
    return db.query("SELECT * FROM Breweries WHERE id=" + id, callback)
  },

};
 module.exports=Retrieve;
