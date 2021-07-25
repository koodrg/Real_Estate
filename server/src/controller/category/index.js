const deleteCategory = require('./deleteCategory');
const postCategory = require('./postCategory');
const updateCategory = require('./updateCategory');
const getAllCategory = require('./getAllCategories');
const getCategoryByID = require('./getCategoryByID')
const showAddCategory = require('./showAddCategory')

module.exports = {
    postCategory,
    updateCategory,
    deleteCategory,
    getAllCategory,
    getCategoryByID,
    showAddCategory,
};