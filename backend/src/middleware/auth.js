const jwt = require("jsonwebtoken");

const authorize = (req, res, next) => {
  // console.log("cookie?:", req.headers.cookie);
  /* const token = req.cookies.refreshToken; */
  const token = req.headers.cookie;
  // console.log("token:", token);
  if (!token) return res.sendStatus(401);

  try {
    //   console.log("try verify token");
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    // console.log("decoded token ==>", decoded);
    req.idUser = decoded.id;
    req.roleUser = decoded.role;
    next();
  } catch (error) {
    res.sendStatus(401);
  }
  return res.status;
};

const isAdmin = (req, res, next) => {
  if (req.roleUser === "admin") next();
  else res.sendStatus(403);
};

module.exports = { authorize, isAdmin };
