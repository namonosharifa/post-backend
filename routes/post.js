const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const { createPost, getAllPosts, updatePost, deletePost } = require("../controllers/post");
router.post("/", createPost);

router.put('/post/:id', auth, updatePost);

router.delete('/posts/:id', auth, deletePost);

router.get("/", (req, res) => {
  res.send("welcome to posts api")
  });
module.exports = router;