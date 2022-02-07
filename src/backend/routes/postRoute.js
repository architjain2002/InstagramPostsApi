const express = require("express");
const router = express.Router();

var postController = require("../controllers/postController");

// to get all the post data
router.get("/findPostDetails", postController.findPostDetails);
// to post intagram post
router.post("/insertPostDetails", postController.insertPostDetails);

// to post comments on to a instagram post
router.post("/insertCommentDetails", postController.insertCommentDetails);

module.exports = router;
