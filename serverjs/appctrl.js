const COURSES = require("./db-data");

// @desc      Start page
// @route     GET /api/v1/view/index
// @access    Public
exports.getData = (req, res, next) => {
  console.log('stigao');

  try {
    console.log(req, res);
    //  res.status(200).json(res.advancedResults);

    res.status(200).json({
      podatak: "podatak",
      payload: Object.values(COURSES),
    });
  } catch (error) {
    console.log("greska=", error);
  }
};
