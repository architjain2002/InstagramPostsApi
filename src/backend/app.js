const express = require("express");
const app = express();
const mongoose = require("mongoose");
const http = require("http");
const server = http.createServer(app);
const hostname = "127.0.0.1";
const port = process.env.PORT || 3000;

var postRouter = require("./routes/postRoute.js");
app.use("/instPosts", postRouter);
mongoose
  .connect("mongodb://localhost:27017/instaPost", {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
  })
  .then(() => {
    console.log("mongodb connected!");
  })
  .catch((err) => {
    console.log(err);
  });

server.listen(port, hostname, () => {
  console.log(`server running`);
});
