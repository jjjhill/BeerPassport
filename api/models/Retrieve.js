var db=require('../dbconnection'); 

var Retrieve={

  getAllBeers:function(callback) {
    return db.query(`SELECT breweries.name AS breweryName, beers.*
      FROM breweries, beers
      WHERE breweries.id = beers.breweryId`
    , callback);
  },

  getBeerById:function(id, callback) {
    return db.query("SELECT * FROM beers WHERE id=" + id, callback)
  },

  getBeersByBreweryId:function(id, callback) {
    return db.query("SELECT * FROM beers WHERE breweryId = " + id, callback)
  },

  getAllBreweries:function(callback) {
    return db.query("SELECT * FROM breweries", callback);
  },

  getBreweryById:function(id, callback) {
    return db.query("SELECT * FROM breweries WHERE id=" + id, callback)
  },

};
 module.exports=Retrieve;
