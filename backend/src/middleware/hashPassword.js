const argon2 = require("argon2");

const hashPassword = async (req, res, next) => {
  const { password } = req.body;
  try {
    const hashedPassword = await argon2.hash(password);

    req.body.hashedPassword = hashedPassword;
    delete req.body.password;

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = { hashPassword };
