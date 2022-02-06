const User = require('./User');
const Favourites = require('./Favourites');
const Beers = require('./Beers');
const Reviews = require('./Reviews');

Beers.belongsTo(User);
User.hasMany(Favourites);
Beers.hasMany(Favourites);
Reviews.belongsTo(Beers);
Reviews.belongsTo(User);

module.exports = { User, Beers, Reviews, Favourites };