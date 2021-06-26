const async = (func) => (req, res, next) =>
  Promise.resolve(func(req, res, next)).catch(next);

module.exports = async;
