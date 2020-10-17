const express = require("express");

const appCtrl = require("./appctrl");
// const Bootcamp = require('../models/BootcampsMod');
// const advancedResults = require('../middleware/advancedResults');

// const { protect } = require('../middleware/auth');

const router = express.Router();
// PATH /course
router.route("/").get(appCtrl.getData);

module.exports = router;
