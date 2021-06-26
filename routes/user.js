const { Router } = require("express");

const { get } = require("../controllers/user");

const router = Router();

router.get("/user", get);

module.exports = router;
