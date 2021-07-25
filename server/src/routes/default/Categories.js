const express = require('express');

const router = express.Router();

const getAllCategory = require('../../api/category/getAllCategories');
const getCategoryIDByName = require('../../api/category/getCategoryByName')

router.get('/all-category', getAllCategory);

router.get('/get-id-by-type/:type', getCategoryIDByName)


module.exports = router;
