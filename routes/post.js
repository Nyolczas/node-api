const express = require('express');
const {getPosts, createPost } = require('../controllers/postController');
const validator = require('../helpers/validator');

const router = express.Router();

router.get('/', getPosts);
router.post('/post', createPost);

module.exports = router;
