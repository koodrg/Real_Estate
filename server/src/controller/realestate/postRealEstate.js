const {RealEstate} = require('../../models')

const postRealEstate = async (req, res) => {
    console.log(req.body)
    try{
        await new RealEstate({
            id_category: req.body.id_category,
            name: req.body.name,
            area: req.body.area,
            area_by_num: req.body.area_by_num,
            direction: req.body.direction,
            num_bedroom: req.body.direction,
            num_wc: req.body.num_wc,
            full_address: req.body.full_address,
            detail_address: {
              ward: req.body.ward,
              district: req.body.district,
              city: req.body.city,
            },
            price: req.body.price,
            price_by_num: req.body.price_by_num,
            more_description: req.body.more_description,
            imgList: req.body.imgList,
            utilsList: [],
            isConfirmed: req.body.isConfirmed,
        }).save(function(err, prd){
          if(err) res.json(err);
          else { 
            req.flash("message","Real Estate Successfully Added !");
            res.redirect("./add-real-estate");
          } 
        });
    } catch(err){
        res.status(404).json({message: err})
    }
}

module.exports = postRealEstate;


