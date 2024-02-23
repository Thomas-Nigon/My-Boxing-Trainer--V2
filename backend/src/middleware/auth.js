const jwt = require("jsonwebtoken");

const authorize = (req, res, next) => {
  // console.log("cookie?:", req.headers.cookie);
  // console.log("req.cookie =>", req.cookie);
  // console.log("my header:", req.headers);
  const myCookieToken = req.headers.cookie;
  const token = myCookieToken.split("jwt=")[1];
  /*   console.log("token inside auth middleware:", token); */
  if (!token) return res.sendStatus(401);

  try {
    //  console.log("try verify token");
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    // console.log("decoded token ==>", decoded);
    req.idUser = decoded.sub;
    req.roleUser = decoded.role;
    // console.log(req.idUser, req.roleUser);
    next();
  } catch (error) {
    // console.log("could not verify token", error);
    res.sendStatus(401);
  }
  return res.status;
};

const isAdmin = (req, res, next) => {
  if (req.roleUser === "admin") next();
  else res.sendStatus(403);
};

module.exports = { authorize, isAdmin };
