const path = require("path");
const router = require("express").Router();
const userRoutes = require("./users");
const profileRoutes = require("./profiles");


router.use("/user", userRoutes);
router.use("/profiles", profileRoutes);


// For anything else, render the html page
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;