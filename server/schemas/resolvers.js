const { AuthenticationError } = require('apollo-server-express');
const { User, Reviews, Beers, Favourites } = require('../models');
const { signToken } = require('../utils/auth');
const { getBeer, getBeers, searchBeers, getFavouriteBeers } = require('./beers');
const { getReviews } = require('./reviews');
const { getRandom } = require('../utils/helpers');

const resolvers = {
    Query: {
        beers: async (parent, args, context) => {
            console.log("Fetching beers...");
            return await getBeers(context.user?.id, 20);
        },
        beer: async (parent, { id }, context) => {
            return await getBeer(context.user?.id, id);
        },
        topBeers: async (parent, args, context) => {
            const beers = await getBeers(context.user?.id, 20);
            return getRandom(beers, Math.min(3, beers.length));
        },
        search: async (parent, { query }, context) => {
            return await searchBeers(query)
        },
        favourites: async (parents, args, context) => {
            return await getFavouriteBeers(context.user?.id);
        },
        reviews: async (parent, { beerId }) => {
            return await getReviews(beerId);
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return await User.findOne({ id: context.user?.id });
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },

    Mutation: {
        addUser: async (parent, { name, email, password }) => {
            const user = await User.create({ name, email, password });
            const token = signToken(user);
            console.log(`Token: ${token}`);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken({id: user.id, email: user.email, name: user.name });
            console.log(`Token: ${token}`);

            return { token, user };
        },
        saveBeer: async (parent, { name, brand, description }, context) => {
            return Beers.create({ name, brand, description });
        },
        addReview: async (parent, { comment, rating, beerId }, context) => {
            if (context.user) {
                return await Reviews.create({
                    comment: comment,
                    rating: rating,
                    user_id: context.user.id,
                    beer_id: beerId,
                });
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        addFavourite: async (parent, { beerId }, context) => {
            if (!context.user) throw new AuthenticationError("You need to be logged in!");

            const userId = context.user.id;

            await Favourites.create({
                user_id: userId,
                beer_id: beerId,
            });
        },
        unfavouriteBeer: async (parent, { beerId }, context) => {
            if (!context.user) throw new AuthenticationError("You need to be logged in!");
            const userId = context.user.id;
            await Favourites.destroy({
                where: {
                    user_id: userId,
                    beer_id: beerId,
                }
            });
        }
    },
};

module.exports = resolvers;