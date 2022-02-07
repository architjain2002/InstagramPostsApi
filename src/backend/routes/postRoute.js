const express = require("express");
const router = express.Router();

var postController = require("../controllers/postController");

// to get all the post data
router.get("/findPostDetails", postController.findPostDetails);

router.post("/insertPostDetails", postController.insertPostDetails);

module.exports = router;
