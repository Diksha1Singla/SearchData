const express = require("express")
const router = express.Router();
const authController = require("../controller/auth_controller")

router.route("/").get(authController.fetchLocation)
router.route("/availBuilding").get(authController.fetchBuilding)

module.exports = router