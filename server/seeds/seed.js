const sequelize = require("../config/connection");
const User = require("../models/User");
const Beers = require('../models/Beers')

const userData = require("./userData.json");
const beerData = require('./beerData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Beers.bulkCreate(beerData, {
    individualHooks: true,
    returning: true,
  })

  process.exit(0);
};

seedDatabase().catch((err) => console.log(err));
