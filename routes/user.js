const { Router } = require("express");

const apiAuth = require("../middleware/apiAuth");

const {
  get,
  getSpecific,
  createUser,
  removeUser,
  updateUser,
} = require("../controllers/user");

const router = Router();

router.get("/user", get);
router.post("/user", createUser);
router.get("/user/:id", getSpecific);
router.patch("/user/:id", apiAuth, updateUser);
router.delete("/user/:id", removeUser);

module.exports = router;
