const Post = require("../models/post");

const createPost = async (req, res) => {
    const post = req.body
    const newPost = newPost({...post, creator: req.userId, createdAt: new Date().toISOString()})
    try {
        await newPost.save();

        res.status(201).json(newPost)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}


const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();

        res.status(200).json(posts)
    } catch (error) {
    }

}

// Update Post
const updatePost = async (req, res) => {
    const postId = req.params.id;
    const userId = req.userId; //from just middleware
    const { title, content } = req.body;

    try {
        // Find the post find
        const post = await Post.findbyId(postId);
        if (!post) {
            return res.status(403).json({ message: "Post not found" });
        }
        // Check if the user owns the post
        if (post.author.toString() !== userId) {
            return res.status(403).json({ message: "unauthorized to update this post" });
        }

        // Update the post
        const updatedPost = await Post.findByIdAndUpdate(id,updatePost,{ new: true });

    } catch (error) {
        console.error('Error updating post:', error);
        return res.status(500).json({ message: "Server error" });
    }
}

// Delete Posts
const deletePost = async (req, res) => {
    try {
        const postId = req.params.id;
        const userId = req.userId; 
        
const post = await Post.findById(postId);
        if (!post) return res.status(404).json({ message: "Post not found" });

        //authorization check - only the creator can delete

        if (post.author.toString() !== userId) {
            return res.status(403).json({ message: 'You can only delete your own posts' });
        } 
        await Post.findByIdAndDelete(postId);
        res.status(200).json({ message: "Post deleted successfully" });
    } catch (error) {
        res.status(500).json({ message:  error.message });
    }
};
module.exports = { 
    createPost,
    getAllPosts,
    updatePost,
    deletePost
}
