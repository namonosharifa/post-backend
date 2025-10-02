// db. js
const mongoose = require('mongoose');

// Replace this with your actual MongoDB URI
const MONGO_URI = "mongodb://localhost:27017/sharieali67_db";
// For Atlas cloud: "mongodb+srv://sharieali67_db_user:<db_Namono@123>@cluster0.aze2htw.mongodb.net/

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;