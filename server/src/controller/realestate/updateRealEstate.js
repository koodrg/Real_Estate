const { RealEstate } = require("../../models");

const updateRealEstateById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updates = req.body;
    const option = { new: true };

    const result = await RealEstate.findByIdAndUpdate(id, updates, option);
    
    req.flash("message","Real Estate Successfully Edited !");
    res.redirect("/admin/real-estate/edit-real-estate/" +id);
    //res.status(200).send(result)
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

module.exports = updateRealEstateById;