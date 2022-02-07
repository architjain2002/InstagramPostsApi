const mongoose = require("mongoose");
var PostModel = require("../models/postModel.js");

exports.findPostDetails = function (req, res) {
  PostModel.find({}, (err, data) => {
    if (err) {
      res.status(400);
    } else {
      console.log(data);
      res.send("all the instagram post data");
    }
  });
};
exports.insertPostDetails = function (req, res) {
  const postObj = new PostModel(req.body);
  postObj.save((err, data) => {
    if (err) {
      res.status(400);
    } else {
      console.log(data);
      res.status(200);
    }
  });
};
