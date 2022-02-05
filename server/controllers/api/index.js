const router = require("express").Router();
const userRoutes = require("./userRoutes");
const beersRoutes = require("./beersRoutes");
const reviewRoutes = require("./reviewRoutes");

router.use("/users", userRoutes);
router.use("/beers", beersRoutes);
router.use("/reviews", reviewRoutes)

module.exports = router;
