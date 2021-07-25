const express = require('express');
const router = express.Router();

const {
    postUser,
    updateUser
} = require('../../controller/user/index');

router.post('/', postUser);

router.patch('/', updateUser);

module.exports = router;