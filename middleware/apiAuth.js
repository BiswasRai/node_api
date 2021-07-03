const { verifyToken } = require("../utils/jwtToken");

/**
 * Function to authorize the token from request header.
 */
authorization = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];

  if (!bearerHeader) {
    return res.sendStatus(401).json({
      msg: "No token, authorization denied.",
    });
  }

  try {
    const bearerToken = bearerHeader.split(" ")[1];
    const decoded = verifyToken(bearerToken);

    req.token = decoded;
    next();
  } catch (err) {
    res.status(401).json({
      msg: "Invalid token",
    });
  }
};

module.exports = authorization;
