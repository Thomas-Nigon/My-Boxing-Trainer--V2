const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const comboControllers = require("./controllers/comboControllers");
const techniqueControllers = require("./controllers/techniqueControllers");
const userControllers = require("./controllers/userControllers");
const programControllers = require("./controllers/programControllers");
const { hashPassword } = require("./middleware/hashPassword");
const authControllers = require("./controllers/authControllers");
const { authorize } = require("./middleware/auth");

router.get("/user", userControllers.browse);
router.get("/me", authorize, userControllers.readById);
router.get("/techniques", techniqueControllers.browse);
router.get("/combo", comboControllers.browse);
router.get("/combo/:id", comboControllers.read);
router.get("/programs", programControllers.browse);

router.post("/register", hashPassword, userControllers.register);
router.post("/login", authControllers.login);
router.put("/edit/:id", programControllers.edit);

/* ************************************************************************* */

module.exports = router;
