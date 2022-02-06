const User = require('./User');
const Favourites = require('./Favourites');
const Beers = require('./Beers');
const Reviews = require('./Reviews');

User.hasMany(Beers);
Beers.hasMany(Favourites);
Beers.hasMany(Reviews);

module.exports = { User, Beers, Reviews, Favourites };