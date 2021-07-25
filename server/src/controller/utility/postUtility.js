const { Utilities } = require("../../models");

const postUtils = async (req, res) => {
  //console.log(req.body);
  try{
    await new Utilities({
      name: req.body.name,
      type: req.body.type
    }).save(function(err, prd){
      if(err) res.json(err);
      else { 
        req.flash("message","Utilities Successfully Added !");
        res.redirect("./add-utility");
      } 
  });
  } catch (err) {
    res.status(404).json({ message: err });
  }
};
module.exports = postUtils;