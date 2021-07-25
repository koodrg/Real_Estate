const { Categories } = require("../../models");

//SPECIFIC ROOM
const getCategoryByID = async (req, res) => {
  try {
    const cate = await Categories.findById(req.params.id, function (err, cate) {
      if (err)
          return console.log(err);
      res.render('categories/edit-category' ,{
          id: cate._id,
          cate_name: cate.cate_name,
          cate_type: cate.cate_type,
          message: req.flash("message")
      });
      //console.log(cate._id)
    });
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

module.exports = getCategoryByID;