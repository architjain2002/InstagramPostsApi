const express = require("express");
const { response } = require("express");
const mongoose = require("mongoose");
var PostModel = require("../models/postModel.js");

// to get all the posts
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

// to insert a post into the array.
exports.insertPostDetails = function (req, res) {
  const postObj = new PostModel(req.body);
  console.log(postObj);
  PostModel.findOne({ InstId: postObj.InstId }, (err, data) => {
    if (err) {
      res.sendStatus(400);
    } else {
      if (data == null) {
        var firstPost = {
          InstId: req.body.InstId,
          ProfilePhotoUrl: req.body.ProfilePhotoUrl,
          InstPosts: [
            {
              PostDescription: req.body.PostDescription,
              PostPhotoUrl: req.body.PostPhotoUrl,
              Location: req.body.Location,
              PostDate: req.body.PostDate,
            },
          ],
        };
        const firstPostObj = new PostModel(firstPost);
        firstPostObj.save();
        res.send("new data inserted");
      } else {
        PostModel.updateOne(
          { InstId: postObj.InstId },
          {
            $push: {
              InstPosts: {
                PostDescription: req.body.PostDescription,
                PostPhotoUrl: req.body.PostPhotoUrl,
                Location: req.body.Location,
                PostDate: req.body.PostDate,
              },
            },
            $set: {
              PostCount: data.PostCount + 1,
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

exports.insertCommentDetails = function (req, res) {
  PostModel.findOne(
    {
      InstId: req.body.InstId,
      // "InstPosts.PostPhotoUrl": req.body.PostPhotoUrl,
    },
    (err, data) => {
      if (err) {
        res.sendStatus(400);
      } else {
        console.log(data);
        if (data == null) {
          res.send("The post No longer exists or there isnt any post");
        } else {
          PostModel.updateOne(
            {
              InstId: req.body.InstId,
              // "InstPosts.PostPhotoUrl": req.body.PostPhotoUrl,
            },
            {
              $push: {
                "InstPosts.$[elem].Comments": {
                  InstId: req.body.CommentInstId,
                  CommentText: req.body.CommentText,
                  CommentToId: req.body.CommentToId,
                },
              },
            },
            {
              arrayFilters: [{ "elem.PostPhotoUrl": req.body.PostPhotoUrl }],
              // multi: true,
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
    }
  );
};
