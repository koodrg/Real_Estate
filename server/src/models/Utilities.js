const mongoose = require('mongoose');
const mongoosastic = require('mongoosastic');

const UtilitiesSchema = mongoose.Schema(
    {
        name :{
            type: String,
            required : true 
        },
        type: {
            type: String,
            required: true
        }
    }
)

UtilitiesSchema.plugin(mongoosastic);

module.exports = mongoose.model('utilities', UtilitiesSchema)