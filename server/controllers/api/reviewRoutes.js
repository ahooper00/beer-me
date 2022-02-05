const router = require("express").Router();
const { Reviews } = require("../../models");
const withAuth = require("../../utils/auth");
const { Op } = require("sequelize");

router.get("/all", async (req, res) => {
    try {
        const review = await Reviews.findAll({
            attributes: [
                "id",
                "comment"
            ],
        });
        res.status(200).json(review);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

router.post("/newReview", withAuth, async (req, res) => {
    try {
        const results = await Reviews.findAll({
            attributes: [
                "id",
                "comment",
            ],
        });
        res.status(200).json(results);
    } catch (err) {
        res.status(500).json(err);
    }
});