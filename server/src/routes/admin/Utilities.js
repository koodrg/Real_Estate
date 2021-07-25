const express = require('express')
const router = express.Router()

const { 
    deleteUtility, 
    getAllUtilities, 
    postUtility, 
    updateUtility,
    getUtilityByID, 
    showAddUtility
} = require('../../controller/utility/index');

router.get('/', getAllUtilities);

router.post('/add-utility', postUtility);

router.get('/add-utility', showAddUtility);

router.get('/delete-utility/:id', deleteUtility);

router.post('/edit-utility/:id', updateUtility);

router.get('/edit-utility/:id', getUtilityByID);

module.exports = router;