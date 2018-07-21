var db=require('../dbconnection'); 

var Send={

  addBeer:function(body, callback){
    return db.query("INSERT INTO Beers (name, type, abv, ibu, breweryId, rating) VALUES (\'" + body.name + "\', \'" + body.type + "\',  \'" + body.abv + "\',\'" + body.ibu + "\', \'" + body.breweryId + "\', \'" + body.rating + "\')", callback);
  },
  deleteBeer:function(query, callback) {
    return db.query("DELETE FROM Beers WHERE id = \'"+query.id+"\'", callback);
  },

  addBrewery:function(body, callback){
    return db.query("INSERT INTO Breweries (name, isRestaurant) VALUES (\'" + body.name + "\', \'" + body.isRestaurant + "\')", callback);
  },
  deleteBrewery:function(query, callback) {
    return db.query("DELETE FROM Breweries WHERE id = \'"+query.id+"\'", callback);
  },

};
module.exports = Send;
