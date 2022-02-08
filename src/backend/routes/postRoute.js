const express = require("express");
const router = express.Router();

var postController = require("../controllers/postController");

// to get all the post data
router.get("/findPostDetails", postController.findPostDetails);

// to post intagram post
router.post("/insertPostDetails", postController.insertPostDetails);

// to delete a Post Details
router.post("/deletePostDetails", postController.deletePostDetails);

// to post comments on to a instagram post
router.post("/insertCommentDetails", postController.insertCommentDetails);

// increment like to the intagram post
router.post("/addNewLike", postController.addNewLike);

// decrement like to the instagram post
router.post("/removeNewLike", postController.removeNewLike);

module.exports = router;
