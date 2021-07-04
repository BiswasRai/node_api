const { User } = require("../models");
const { Op } = require("sequelize");
const asyncHandler = require("../middleware/async");

const { signToken } = require("../utils/jwtToken");
const ErrorHandler = require("../utils/errorHandler");

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

/**
 * @desc Create a new user.
 * @route POST '/user'
 * @access Private
 */
exports.createUser = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const userEmail = await User.findOne({ where: { email } });
  if (userEmail) throw new ErrorHandler(`User email already exists.`, 401);

  const user = await User.create(req.body);
  const token = signToken({ user });

  res.status(200).json({
    status: true,
    data: user,
    token,
    message: "Successfully created a user",
  });
});

/**
 * @desc Update the user information.
 * @route PATCH '/user/:id'
 * @access Private
 */
exports.updateUser = asyncHandler(async (req, res, next) => {
  const { email } = req.body;
  const { userId } = req.params;
  const userEmail = await User.findOne({
    where: {
      email,
      [Op.not]: [
        {
          id: userId,
        },
      ],
    },
  });
  await User.update(req.body, { where: { id: userId } });
  const updatedUser = await User.findOne({ where: { id: userId } });

  if (userEmail) throw new ErrorHandler(`User email already exists.`, 401);

  res.status(200).json({
    status: true,
    data: updatedUser,
    message: "Successfully updated a user",
  });
});

/**
 * @desc Delete a user.
 * @route DELETE '/user/:id'
 * @access Private
 */
exports.removeUser = asyncHandler(async (req, res, next) => {
  await User.destroy({
    where: {
      id: req.params.id,
    },
  });

  res.status(200).json({
    status: true,
    message: "Successfully deleted a user",
  });
});
