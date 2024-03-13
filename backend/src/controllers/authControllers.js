const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const tables = require("../tables");

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    // Fetch a specific user from the database based on the provided email
    const user = await tables.user.readByEmailWithPassword(email);
    if (user == null) {
      res.sendStatus(422);
      return;
    }
    const verified = await argon2.verify(user.password, password);
    if (verified) {
      // console.log("password verified !!");
      // Respond with the user and a signed token in JSON format (but without the hashed password)
      delete user.hashed_password;
      const accessToken = jwt.sign(
        { sub: user.id, isAdmin: user.isAdmin },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: "1h",
        }
      );
      // console.log("acces Token in authController ==>", accessToken);
      /*     const refreshToken = jwt.sign(
        { sub: user.id, isAdmin: user.isAdmin },
        process.env.REFRESH_TOKEN_SECRET,
        {
          expiresIn: "1h",
        }
      ); */
      res.cookie("jwt", accessToken, {
        httpOnly: true,
        maxAge: 60 * 60 * 1000,
        secure: true,
        sameSite: "none",
      });

      res.json({
        email: user.email,
        id: user.id,
        pseudo: user.pseudo,
        role: user.role,
        accessToken,
      });
    } else {
      res.sendStatus(422);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
const logout = async ({ res }) => {
  try {
    await res.clearCookie("jwt").sendStatus(200);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  login,
  logout,
};
