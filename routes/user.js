const { Router } = require("express");

const apiAuth = require("../middleware/apiAuth");
const validationPayload = require("../middleware/validationPayload");

const {
  get,
  getSpecific,
  createUser,
  removeUser,
  updateUser,
} = require("../controllers/user");
const createUserSchema = require("../validation/userValidation");

const router = Router();

router.get("/user", get);
router.post("/user", validationPayload(createUserSchema), createUser);
router.get("/user/:id", getSpecific);
router.patch("/user/:id", apiAuth, updateUser);
router.delete("/user/:id", removeUser);

module.exports = router;
