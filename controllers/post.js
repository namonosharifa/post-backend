const Post = require("../models/post")

const createPost = async (req, res) => {
    const post = req.body
    const newPost = newPost({...post, creator: req.userId, createdAt: new Date().toISOString()})
    try {
        await newPost.save();

        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}


const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();

        res.status(200).json(posts)
    } catch (error) {
    }

}
