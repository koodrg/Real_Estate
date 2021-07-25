const express = require('express')
const router = express.Router()

const {
    postCategory,
    updateCategory,
    deleteCategory,
    getAllCategory,
    getCategoryByID,
    showAddCategory,
} = require('../../controller/category/index');

router.get('/', getAllCategory);

router.post('/add-category', postCategory);

router.get('/add-category', showAddCategory);

router.get('/delete-category/:id', deleteCategory);

router.post('/edit-category/:id', updateCategory);

router.get('/edit-category/:id', getCategoryByID);

module.exports = router;