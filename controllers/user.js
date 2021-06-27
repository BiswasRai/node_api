const { User } = require("../models");
const asyncHandler = require("../middleware/async");

/**
 * @desc GET all user
 * @route GET '/user'
 * @access Public
 */
exports.get = asyncHandler(async (req, res, next) => {
  const user = await User.findAll();

  res.status(200).json({
    status: true,
    data: user,
  });
});

/**
 * @desc Get one specific user from its id.
 * @route GET '/user/:id'
 * @access Public
 */
exports.getSpecific = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const user = await User.findOne({
    where: { id },
  });

  res.status(200).json({
    status: true,
    data: user,
  });
});
