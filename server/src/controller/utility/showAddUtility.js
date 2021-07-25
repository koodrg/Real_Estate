const { Utilities } = require("../../models");

const showAddUtility = (req,res) => {
    const name ="";
    const type ="";
    res.render('../views/utilities/add-utility.ejs',{
        name: name,
        type: type,
        message: req.flash('message')
    });
}

module.exports = showAddUtility;