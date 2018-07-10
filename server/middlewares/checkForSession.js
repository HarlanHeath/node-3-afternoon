module.exports = function(req, res, next) {
  const { session } = req;

  if (!session.user) {
    session.use = { username: "", cart: [], total: 0 };
  }
  next();
};
