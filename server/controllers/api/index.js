const router = require("express").Router();
const userRoutes = require("./userRoutes");
const beersRoutes = require("./beersRoutes");

router.use("/users", userRoutes);
router.use("/beers", beersRoutes);

module.exports = router;
