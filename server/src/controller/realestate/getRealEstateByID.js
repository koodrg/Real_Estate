const { RealEstate } = require("../../models");


const getRealEstateById = async (req, res) => {

  try {
    const realEstate = await RealEstate.findById(req.params.id, function (err, cate) {
      if (err)
          return console.log(err);
      res.render('realEstate/edit-real-estate' ,{
          id: cate._id,
          id_category: cate.id_category,
          name: cate.name,
          area: cate.area,
          area_by_num: cate.area_by_num,
          direction: cate.direction,
          num_bedroom: cate.num_bedroom,
          num_wc: cate.num_wc,
          full_address: cate.full_address,
          ward: cate.detail_address.ward,
          district: cate.detail_address.district,
          city: cate.detail_address.city,
          price: cate.price,
          price_by_num: cate.price_by_num,
          more_description: cate.more_description,
          imgList: cate.imgList,
          utilsList: cate.utilsList,
          isConfirmed: cate.isConfirmed,
          postedBy: cate.postedBy,
          message: req.flash("message")
      });
    });
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

module.exports = getRealEstateById;