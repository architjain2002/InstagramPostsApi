const express = require("express");
const { response } = require("express");
const mongoose = require("mongoose");
var PostModel = require("../models/postModel.js");

exports.findPostDetails = function (req, res) {
  PostModel.find({}, (err, data) => {
    if (err) {
      res.sendStatus(400);
    } else {
      console.log(JSON.parse(data));
      res.send("all the instagram post data");
    }
  });
};
exports.insertPostDetails = function (req, res) {
  const postObj = new PostModel(req.body);
  console.log(postObj);
  PostModel.findOne({ InstId: postObj.InstId }, (err, data) => {
    if (err) {
      res.sendStatus(400);
    } else {
      if (data == null) {
        postObj.save();
        res.send("new data inserted");
      } else {
        // data = JSON.parse(data);
        // data.PostCount = PostCount + 1;
        PostModel.updateMany(
          { InstId: postObj.InstId },
          {
            $push: {
              InstPosts: {
                PostDescription: req.body.PostDescription,
                PostPhotoUrl: req.body.PostPhotoUrl,
                Location: req.body.Location,
                LikesCount: req.body.LikesCount,
                CommentCount: req.body.CommentCount,
                PostDate: req.body.PostDate,
                Comments: [
                  {
                    InstId: req.body.InstId,
                    CommentText: req.body.CommentText,
                    CommentToId: req.body.CommentToId,
                  },
                ],
              },
            },
          }
        )
          .then((data) => {
            console.log(data);
            res.sendStatus(200);
          })
          .catch((err) => {
            console.log(err);
            res.sendStatus(400);
          });
      }
    }
  });
};
