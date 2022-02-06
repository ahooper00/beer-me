const router = require("express").Router();
const { Beers, User } = require("../../models");
const withAuth = require("../../utils/auth");
const { Op } = require("sequelize");
const { getRandom } = require("../../utils/helpers");
const Favourites = require("../../models/Favourites");
const reviewRoutes = require('./reviewRoutes');

const getBeers = async (userId, limit) => {
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
            where: {
                user_id: {
                    [Op.eq]: userId
                }
            }
        },
        limit: limit
    });
    return beers.map(({ id, name, brand, description, favourites }) =>
        ({ id, name, brand, description, favourite: favourites.length > 0 }));
}

const getBeer = async (userId, beerId) => {
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
            where: {
                user_id: {
                    [Op.eq]: userId
                }
            }
        }
    });
    if (!beer) return;
    const { id, name, brand, description, favourites } = beer;
    return { id, name, brand, description, favourite: favourites.length > 0 };
}

router.get("/top", async (req, res) => {
    try {
        const beers = await getBeers(req.session.user_id, 20);
        const topBeers = getRandom(beers, Math.min(3, beers.length));
        res.status(200).json(topBeers);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

router.post("/favourite", async (req, res) => {
    try {
        const userId = req.session.user_id;
        const beerId = req.body.beerId;

        const favourite = await Favourites.create({
            user_id: userId,
            beer_id: beerId,
        });
        res.status(200).json(favourite);
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});

router.get("/favourites", async (req, res) => {
    try {
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
                where: {
                    user_id: {
                        [Op.eq]: req.session.user_id
                    }
                }
            },
        });
        const favouriteBeers = beers.map(({ id, name, brand, description, favourites }) =>
            ({ id, name, brand, description, favourite: favourites.length > 0 }));
        res.status(200).json(favouriteBeers);
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});

router.post("/unfavourite", async (req, res) => {
    try {
        const userId = req.session.user_id;
        const beerId = req.body.beerId;

        const favourite = await Favourites.destroy({
            where: {
                user_id: userId,
                beer_id: beerId,
            }
        });
        if (!favourite) {
            res.status(404).json({ message: "No beer found with this id!" });
            return;
        }
        res.status(200).json(favourite);
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
})

router.get("/all", async (req, res) => {
    try {
        const beers = await getBeers(req.session.user_id, 20);
        res.status(200).json(beers);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const beer = await getBeer(req.session.user_id, req.params.id);
        if (!beer) {
            res.status(404).json({ message: "No beer found with that id" });
            return;
        }
        res.status(200).json(beer);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post("/", withAuth, async (req, res) => {
    try {
        const newBeer = await Beers.create({
            name: req.body.name,
            brand: req.body.brand,
            description: req.body.description,
        });

        res.status(200).json(newBeer);
    } catch (err) {
        res.status(400).json(err);
    }
});

// router.put("/:id", withAuth, async (req, res) => {
//     try {
//         const updateBeer = await Beers.update(
//             {
//                 name: req.body.name,
//                 brand: req.body.brand,
//                 description: req.body.description,
//                 user_id: req.session.user_id,
//             },
//             {
//                 where: {
//                     id: req.params.id,
//                 },
//             }
//         );

//         if (!updateBeer) {
//             res.status(400).json({ message: "No beer found with that id" });
//             return;
//         }
//         res.status(200).json(updateBeer);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

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

router.use('/:id/reviews', reviewRoutes);

module.exports = router;