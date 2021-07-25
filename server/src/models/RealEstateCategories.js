const mongoose = require('mongoose');
const mongoosastic = require('mongoosastic');

const RealEstateCategories = mongoose.Schema(
    {
        cate_name:{
            type: String,
            required: true
        },
        cate_type:{
            type: String,
            required: true
        }
    }
)

RealEstateCategories.plugin(mongoosastic);

module.exports = mongoose.model('categories', RealEstateCategories)