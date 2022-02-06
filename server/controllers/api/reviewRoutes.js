const router = require("express").Router({ mergeParams: true });
const Reviews = require("../../models/Reviews");
const withAuth = require("../../utils/auth");
const { Op } = require("sequelize");
const { User } = require("../../models");

router.get("/", async (req, res) => {
    try {
        const reviews = await Reviews.findAll({
            attributes: [
                "id",
                "comment",
                "rating",
            ],
            where: {
                beer_id: req.params.id,
            },
            include: {
                model: User,
                required: true,
                attributes: [
                    "name"
                ]
            }
        });
        const reviewsWithUser = reviews.map(({ id, comment, rating, user }) =>
            ({ id, comment, rating, user: user.name }))
        res.status(200).json(reviewsWithUser);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

router.post("/", withAuth, async (req, res) => {
    console.log(JSON.stringify({
        comment: req.body.comment,
        rating: req.body.rating,
        user_id: req.session.user_id,
        beer_id: req.params.id,
    }))
    try {
        await Reviews.create({
            comment: req.body.comment,
            rating: req.body.rating,
            user_id: req.session.user_id,
            beer_id: req.params.id,
        });
        res.status(200).json();
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;