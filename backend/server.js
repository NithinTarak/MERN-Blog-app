const express = require('express');
require('dotenv').config();
const workoutRoutes = require('./routes/workouts');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONG_URI)
.then(() => {
       app.listen(process.env.PORT,() => {
        console.log('connected to DB &Listening on port ',process.env.PORT)
    });
    
})
.catch((err) => {
    console.log(err)
})
app.use(express.json());

app.get('/',(req,res) => {
    res.json({msg: "Welcome to app"})
})
app.use('/api/workouts',workoutRoutes);




