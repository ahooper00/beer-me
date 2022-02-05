const User = require('./User');
const Favourites = require('./Favourites');
const Beers = require('./Beers');
const Reviews = require('./Reviews');

User.hasMany(Beers);
Beers.hasMany(Favourites)

module.exports = { User, Beers, Reviews, Favourites };