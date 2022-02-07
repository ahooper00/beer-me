const { Reviews, User } = require("../models");

module.exports = {
    getReviews: async (beerId) => {
        const reviews = await Reviews.findAll({
            attributes: [
                "id",
                "comment",
                "rating",
            ],
            where: {
                beer_id: beerId,
            },
            include: {
                model: User,
                required: true,
                attributes: [
                    "name"
                ]
            }
        });
        return reviews.map(({ id, comment, rating, user }) =>
            ({ id, comment, rating, user: user.name }))
    }
}