
const { Beers, Favourites, Reviews, User } = require('../models');
const { Op } = require('sequelize');

module.exports = {
    getBeers: async (userId, limit) => {
        console.log(`User id ${userId}`);
        const where = userId ? { user_id: { [Op.eq]: userId } } : null;
        const beers = await Beers.findAll({
            attributes: [
                "id",
                "name",
                "brand",
                "description"
            ],
            include: {
                model: Favourites,
                required: false,
                where
            },
            limit: limit
        });
        console.log(`Returning ${beers}`);
        return beers.map(({ id, name, brand, description, favourites }) =>
            ({ id, name, brand, description, favourite: favourites.length > 0 }));
    },
    getBeer: async (userId, beerId) => {
        console.log(`User id ${userId}`);
        const where = userId ? { user_id: { [Op.eq]: userId } } : null;
        const beer = await Beers.findByPk(beerId, {
            attributes: [
                "id",
                "name",
                "brand",
                "description"
            ],
            include: {
                model: Favourites,
                required: false,
                where
            }
        });
        if (!beer) return;
        const { id, name, brand, description, favourites } = beer;
        return { id, name, brand, description, favourite: favourites.length > 0 };
    },
    searchBeers: (query) => Beers.findAll({
        where: {
            [Op.or]: [
                { name: { [Op.like]: `%${query}%` } },
                { brand: { [Op.like]: `%${query}%` } },
            ]
        },
        attributes: [
            "id",
            "name",
            "brand",
            "description"
        ],
    }),
    getFavouriteBeers: async (userId) => {
        const where = userId ? { user_id: { [Op.eq]: userId } } : {};
        const beers = await Beers.findAll({
            attributes: [
                "id",
                "name",
                "brand",
                "description"
            ],
            include: {
                model: Favourites,
                required: true,
                where
            },
        });
        return beers.map(({ id, name, brand, description, favourites }) =>
            ({ id, name, brand, description, favourite: favourites.length > 0 }));
    }
}