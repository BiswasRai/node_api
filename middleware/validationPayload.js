/**
 * Function to validate the payload.
 *
 * @param {Object} schema
 * @returns {Boolean}
 */
const validationPayload = (schema) => async (req, res, next) => {
  const { body } = req;
  try {
    await schema.validate(body);

    next();
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = validationPayload;
