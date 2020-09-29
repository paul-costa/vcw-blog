const express = require('express');

const CheckAuth = require('../middleware/check-auth');
const PostsController = require('../controllers/posts-controller');
const MulterMiddleware = require('../middleware/multer');

const router = express.Router();



//Fetch all Posts from server
router.get('', PostsController.fetchPosts);


//Fetch specific post from server
router.get('/:id', PostsController.fetchPost);


//create and save a post
router.post('', CheckAuth, MulterMiddleware, PostsController.savePost);


//update specific post from server
router.put('/:id', CheckAuth, MulterMiddleware, PostsController.updatePost);


//delete specific post from server 
router.delete('/:id', CheckAuth, PostsController.deletePost);



module.exports = router;