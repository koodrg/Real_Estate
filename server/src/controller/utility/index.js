const deleteUtility = require("./deleteUtility");
const getAllUtilities = require("./getAllUtilities");
const postUtility = require("./postUtility");
const updateUtility = require("./updateUtility");
const getUtilityByID = require('./getUtilityByID')
const showAddUtility = require('./showAddUtility')

module.exports = { 
    deleteUtility, 
    getAllUtilities,
    postUtility, 
    updateUtility,
    getUtilityByID,
    showAddUtility
};