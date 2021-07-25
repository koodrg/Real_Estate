const { Categories } = require("../../models");

const showAddCategory = (req,res) => {
    const cate_name ="";
    const cate_type ="";
    res.render('../views/categories/add-category.ejs',{
        cate_name: cate_name,
        room_type: cate_type,
        message: req.flash('message')
    });
}

module.exports = showAddCategory;