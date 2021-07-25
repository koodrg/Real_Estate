const { Utilities } = require("../../models");

//SPECIFIC ROOM
const getUtilityById = async (req, res) => {
  try {
    const util = await Utilities.findById(req.params.id, function (err, util) {
      if (err)
          return console.log(err);
      res.render('utilities/edit-utility' ,{
          id: util._id,
          name: util.name,
          type: util.type,
          message: req.flash("message")
      });
      //console.log(cate._id)
    });
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

module.exports = getUtilityById;