const express = require("express")
const { createDemo, getDemos } = require("../controllers/demoController")
const router = express.Router()
router.route("/").get(getDemos).post(createDemo)
module.exports = router
