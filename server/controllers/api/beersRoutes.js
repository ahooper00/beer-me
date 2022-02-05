const router = require("express").Router();
const { Beers, User } = require("../../models");
const withAuth = require("../../utils/auth");
const { Op } = require("sequelize");
const { getRandom } = require("../../utils/helpers");

router.get("/top", async (req, res) => {
    try {
        const beers = await Beers.findAll({
            attributes: [
                "id",
                "name",
                "brand",
                "description"
            ],
            limit: 20
        });
        const topBeers = getRandom(beers, Math.min(3, beers.length));
        res.status(200).json(topBeers);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});
router.get("/all", async (req, res) => {
    try {
        const getBeers = await Beers.findAll({
            attributes: [
                "id",
                "name",
                "brand",
                "description"
            ],
        });
        res.status(200).json(getBeers);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

router.get("/:user_id", withAuth, async (req, res) => {
    try {
        const getBeersByUser = await Beers.findAll(req.params.user_id, {
            include: [{ model: User }],
        });
        if (!getBeersByUser) {
            res.status(400).json({ message: "No Beers Found" });
            return;
        }
        res.status(200).json(getBeersByUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const findOneBeer = await Beers.findByPk(req.params.id, {
        });
        if (!findOneBeer) {
            res.status(400).json({ message: "No beer found with that id" });
            return;
        }
        res.status(200).json(findOneBeer);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post("/newBeer", withAuth, async (req, res) => {
    try {
        const newBeer = await Beers.create({
            name: req.body.name,
            brand: req.body.brand,
            description: req.body.description,
            user_id: req.session.user_id,
        });

        res.status(200).json(newBeer);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put("/:id", withAuth, async (req, res) => {
    try {
        const updateBeer = await Beers.update(
            {
                name: req.body.name,
                brand: req.body.brand,
                description: req.body.description,
                user_id: req.session.user_id,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        );

        if (!updateBeer) {
            res.status(400).json({ message: "No beer found with that id" });
            return;
        }
        res.status(200).json(updateBeer);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post("/search", withAuth, async (req, res) => {
    try {
        const results = await Beers.findAll({
            where: {
                [Op.or]: [
                    { name: { [Op.like]: `%${req.body.query}%` } },
                    { brand: { [Op.like]: `%${req.body.query}%` } },
                ]
            },
            attributes: [
                "id",
                "name",
                "brand",
                "description"
            ],
        });
        res.status(200).json(results);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete("/:id", withAuth, async (req, res) => {
    try {
        const beerData = await Beers.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!beerData) {
            res.status(404).json({ message: "No beer found with this id!" });
            return;
        }

        res.status(200).json(beerData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;