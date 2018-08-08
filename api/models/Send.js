var db=require('../dbconnection'); 

var Send={

  addBeer:function(body, callback){
    return db.query("INSERT INTO beers (name, type, abv, ibu, breweryId, rating) VALUES (\'" + body.name + "\', \'" + body.type + "\',  \'" + body.abv + "\',\'" + body.ibu + "\', \'" + body.breweryId + "\', \'" + body.rating + "\')", callback);
  },
  deleteBeer:function(query, callback) {
    return db.query("DELETE FROM beers WHERE id = \'"+query.id+"\'", callback);
  },

  addBrewery:function(body, callback){
    return db.query("INSERT INTO breweries (name, city, visited, isRestaurant) VALUES (\'" + body.name + "\', \'" + body.city + "\', " + body.visited + ", " + body.isRestaurant + ")", callback);
  },
  deleteBrewery:function(query, callback) {
    return db.query("DELETE FROM breweries WHERE id = \'"+query.id+"\'", callback);
  },

};
module.exports = Send;
