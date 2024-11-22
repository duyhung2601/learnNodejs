const express = require('express');
const { getHomepage, getABC, getHung, postCreateUser, getCreatePage, getUpdatePage, postUpdateUser, postDeleteUser, postHandleRemoveUser } = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomepage);
router.get('/abc', getABC);
router.get('/hung', getHung);

router.get('/create', getCreatePage);
router.get('/edit/:id', getUpdatePage);


router.post('/create-user', postCreateUser);
router.post('/edit-user', postUpdateUser);
// router.post('/delete-user/:id', postDeleteUser);
// router.post('/delete-user', postHandleRemoveUser);
router.delete('/delete-user/:id', postHandleRemoveUser);

module.exports = router;