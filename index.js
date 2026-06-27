require ('dotenv').config();
const express = require('express');
const app = express()

const mongoose = require('mongoose')
const connectDB = require('./config/db')
const userRoute = require('./routes/user.route')
const noteRoute = require('./routes/note.route')
const errorHandler = require('./middlewares/error.middleware');
const userValidation = require('./validation/user.validation')



app.use(express.json())

connectDB();

app.get('/', (req,res) => {
    return res.json({
        success: true,
        message: "Second brain API is running"
    });
});

app.use('/api/users', userRoute);
app.use('/api', noteRoute);








app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`) 
})

 