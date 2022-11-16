const router = require("express").Router();
const userRoutes = require("./api/userRoutes");

router.use("/api/users", userRoutes);

router.use((req, res) => res.send({
    message: "Invalid Route"
}));

module.exports = router;
