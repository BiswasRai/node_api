const { verify, sign } = require("jsonwebtoken");

/**
 * Function to verify JWT token.
 *
 * @param {String} token
 * @returns {Boolean}
 */
verifyToken = (token) => {
  const data = verify(token, process.env.JWT_CONFIRMATION_SECRET);
  return data;
};

/**
 * Function to sign in JWT token.
 *
 * @param {String||Object} data
 * @returns {String}
 */
signToken = (data) => {
  const token = sign(data, process.env.JWT_CONFIRMATION_SECRET, {
    expiresIn: 10000,
  });
  return token;
};

module.exports = { verifyToken, signToken };
