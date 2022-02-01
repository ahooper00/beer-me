const { AuthenticationError } = require('apollo-server-express');
const { User, Reviews } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('reviews');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('reviews');
        },
        reviews: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Review.find(params).sort({ createdAt: -1 });
        },
        review: async (parent, { reviewId }) => {
            return Reviews.findOne({ _id: reviewId });
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('reviews');
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
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

            const token = signToken(user);

            return { token, user };
        },
        addReview: async (parent, { reviewText }, context) => {
            if (context.user) {
                const review = await Reviews.create({
                    reviewText,
                    reviewAuthor: context.user.username,
                });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { reviews: review._id } }
                );

                return review;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        removeReview: async (parent, { reviewId }, context) => {
            if (context.user) {
                const review = await Reviews.findOneAndDelete({
                    _id: reviewId,
                    reviewAuthor: context.user.username,
                });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { reviews: review._id } }
                );

                return review;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        saveBeer: async (parent, { newBeer }, context) => {
            if (context.user) {
                const updateUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $push: { savedBeer: newBeer } },
                    { new: true }
                );
                return updateUser;
            }
            throw new AuthenticationError("You must be logged in first");
        },
        removeBeer: async (parent, { beerId }, context) => {
            if (context.user) {
                const updateUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedBeer: { beerId } } },
                    { new: true }
                );
                return updateUser;
            }
            throw new AuthenticationError("You must be logged in first");
        },
    },
};

module.exports = resolvers;