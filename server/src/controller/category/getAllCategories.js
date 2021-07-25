const {Categories} = require('../../models');

const getAllCategories = async (req, res) =>{
  try {
    const category = await Categories.find((err,cate) => {
      if (err)
        return console.log(err);
        //console.log(cate)

      res.render('categories/all-categories', {
        categories :cate
      })
    });
    //res.status(200).json(category);
  } catch (err) {
    res.status(404).json({ message: err });
  }
}

module.exports = getAllCategories;