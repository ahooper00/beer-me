const withAuth = (req, res, next) => {
  if (!req.session.logged_in) {
    res.status(403).json({ message: "User not logged in" })
  } else {
    next();
  }
};

module.exports = withAuth;
