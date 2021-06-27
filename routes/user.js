const { Router } = require("express");

const { get, getSpecific } = require("../controllers/user");

const router = Router();

router.get("/user", get);
router.get("/user/:id", getSpecific);

module.exports = router;
