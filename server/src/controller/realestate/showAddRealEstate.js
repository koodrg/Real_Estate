const { RealEstate } = require("../../models");

const showAddRealEstate = (req, res) => {
    const id_category = "";
    const name = "";
    const area = "";
    const area_by_num = 0;
    const direction = "";
    const num_bedroom = 0;
    const num_wc = 0;
    const full_address = "";
    const ward = "";
    const district = "";
    const city = "";
    const price = "";
    const price_by_num = 0;
    const more_description = 0;
    const imgList = "";
    const utilsList = "";
    const isConfirmed = true;
    const postedBy = null;
    res.render('../views/realEstate/add-real-estate.ejs',{
        id_category: req.body.id_category,
        name: req.body.name,
        area: req.body.area,
        area_by_num: req.body.area_by_num,
        direction: req.body.direction,
        num_bedroom: req.body.direction,
        num_wc: req.body.num_wc,
        full_address: req.body.full_address,
        ward: req.body.ward,
        district: req.body.district,
        city: req.body.city,
        price: req.body.price,
        price_by_num: req.body.price_by_num,
        more_description: req.body.more_description,
        imgList: [req.body.imgList],
        utilsList: [req.body.utilsList],
        isConfirmed: req.body.isConfirmed,
        postedBy: req.body.postedBy,
        message: req.flash('message')
    });
}

module.exports = showAddRealEstate;