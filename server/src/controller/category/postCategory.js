const {Categories} = require('../../models')


const postCategory = async (req, res) => {
    console.log(req.body)
    try{
      await new Categories({
          cate_name: req.body.cate_name,
          cate_type: req.body.cate_type
        }).save(function(err, prd){
          if(err) res.json(err);
          else { 
            req.flash("message","Category Successfully Added !");
            res.redirect("./add-category");
          } 
        });
    } catch(err){
        res.status(404).json({message: err})
    }
}

module.exports = postCategory;


