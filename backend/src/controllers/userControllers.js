const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const recipe = await tables.user.readAll();

    // Respond with the items in JSON format
    res.json(recipe);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const readByEmail = async (req, res, next) => {
  // console.log("read by email reqbody ===>", req.body);
  try {
    const user = await tables.user.readByEmail();
    res.json(user);
  } catch (error) {
    next();
  }
};

const readById = async (req, res, next) => {
  // console.log("read by ID reqbody ===>", req.idUser);
  try {
    const user = await tables.user.read(req.idUser);
    res.json(user);
  } catch (error) {
    next();
  }
};

const register = async (req, res, next) => {
  const { user, email, hashedPassword } = req.idUser;

  try {
    const registredUser = await tables.user.create(user, email, hashedPassword);
    res.json(registredUser);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  readByEmail,
  readById,
  register,
};
