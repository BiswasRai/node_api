const { User } = require("../models");
const asyncHandler = require("../middleware/async");

/**
 * @desc GET all user
 * @access Public
 */
exports.get = asyncHandler(async (req, res, next) => {
  const user = await User.findAll();
  console.log(user);
  res.status(200).json({
    status: true,
    data: user,
  });
});
