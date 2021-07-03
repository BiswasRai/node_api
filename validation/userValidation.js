const yup = require("yup");

/**
 * Create user validation object schema.
 */
const createUserSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  gender: yup.string().required(),
  role: yup.array("Role must be selected").length(1).required(),
});

module.exports = createUserSchema;
