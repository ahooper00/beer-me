const router = require("express").Router({ mergeParams: true });
const Reviews = require("../../models/Reviews");
const withAuth = require("../../utils/auth");
const { Op } = require("sequelize");

router.get("/", async (req, res) => {
    try {
        const review = await Reviews.findAll({
            attributes: [
                "id",
                "comment",
                "rating",
            ],
            where: {
                beer_id: req.params.id,
            }
        });
        res.status(200).json(review);
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