const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const userControllers = require("./controllers/userControllers");
const { hashPassword } = require("./middleware/hashPassword");
const authControllers = require("./controllers/authControllers");

router.get("/user", userControllers.browse);

router.post("/adduser", hashPassword, userControllers.register);
router.post("/login", authControllers.login);

router.get("/items/:id", itemControllers.read);
router.get("/items", itemControllers.browse);
router.post("/items", itemControllers.add);

/* ************************************************************************* */

module.exports = router;
