const argon2 = require("argon2");

const tables = require("../tables");

const login = async (req, res, next) => {
  try {
    // Fetch a specific user from the database based on the provided email
    const user = await tables.user.readByEmailWithPassword(req.body.data.mail);
    if (user == null) {
      res.sendStatus(422);
      return;
    }
    const verified = await argon2.verify(user.password, req.body.data.password);
    if (verified) {
      // Respond with the user and a signed token in JSON format (but without the hashed password)
      delete user.hashed_password;
      res.json({
        email: user.email,
        id: user.id,
        pseudo: user.pseudo,
        role: user.role,
      });
    } else {
      res.sendStatus(422);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
module.exports = {
  login,
};
