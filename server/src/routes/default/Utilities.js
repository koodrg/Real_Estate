const express = require('express');

const router = express.Router();

const getAllUtilities = require('../../api/utility/getAllUtilities')
const getUtilNameByID = require('../../api/utility/getUtilNameByID')

router.get('/all-utilities', getAllUtilities);

router.get('/name/:id', getUtilNameByID)


module.exports = router;