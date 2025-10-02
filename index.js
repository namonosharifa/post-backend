const express = require('express')
const connectDB = require('./db');

require('dotenv').config();
const userRoutes = require('./routes/user');
const postRoutes = require("")

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the my posts API')
});


app.use('/posts', userRoutes)
app.use('/posts', postRoutes)

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

connectDB();

