const {Categories} = require('../../models')

const updateCategory = async (req, res) => {
    try{
        const id = req.params.id;
        const updates = req.body;
        const option = {new: true};

        const result = await Categories.findByIdAndUpdate(id, updates, option);

        req.flash("message","Category Successfully Edited !");
        res.redirect("/admin/categories/edit-category/" +id);
        //res.status(200).send(result)
    } catch(err){
        res.status(404).json({message: err})
    }
};

module.exports = updateCategory;