const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const comboControllers = require("./controllers/comboControllers");
const itemControllers = require("./controllers/itemControllers");
const techniqueControllers = require("./controllers/techniqueControllers");
const userControllers = require("./controllers/userControllers");
const programControllers = require("./controllers/programControllers");
const { hashPassword } = require("./middleware/hashPassword");
const authControllers = require("./controllers/authControllers");

router.get("/user", userControllers.browse);
router.get("/techniques", techniqueControllers.browse);
router.get("/combo", comboControllers.browse);
router.get("/combo/:id", comboControllers.read);
router.get("/programs", programControllers.browse);

router.post("/adduser", hashPassword, userControllers.register);
router.post("/login", authControllers.login);
router.put("/edit/:id", programControllers.edit);

router.get("/items/:id", itemControllers.read);
router.get("/items", itemControllers.browse);
router.post("/items", itemControllers.add);

/* ************************************************************************* */

module.exports = router;
