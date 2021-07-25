const express = require('express');
const { 
    deleteRealEstate,
    getAllRealEstate,
    updateRealEstate,
    getRealEstateByID,
    postRealEstate,
    showAddRealEstate,
} = require('../../controller/realestate/index');

const router = express.Router();

router.get('/', getAllRealEstate);

router.post('/add-real-estate', postRealEstate);

router.get('/add-real-estate', showAddRealEstate);

router.get('/delete-real-estate/:id', deleteRealEstate);

router.post('/edit-real-estate/:id', updateRealEstate);

router.get('/edit-real-estate/:id', getRealEstateByID);

module.exports = router;