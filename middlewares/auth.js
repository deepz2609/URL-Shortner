const { getUser } = require("../services/auth");

async function restrictToLoggedinUserOnly(req, res, next) {
  const userUid = req.cookies?.session;

  if (!userUid) return res.redirect("/login");
  const user = getUser(userUid);

  if (!user) return res.redirect("/login");

  req.user = user;
  next();
}

async function checkAuth(req, res, next) {
  const userUid = req.cookies?.session;

  const user = getUser(userUid);

  req.user = user;
  next();
}


module.exports = {
  restrictToLoggedinUserOnly,
  checkAuth,
};