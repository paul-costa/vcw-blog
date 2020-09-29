const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');



const routerPosts = require('./routes/posts');
const userRoutes = require('./routes/user');


//Avoid CORS fuckery
app.use((req,res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});

mongoose.connect('mongodb+srv://paulcosta:'+process.env.MONGO_ATLAS_PASSWORD+'@cluster0-7s6ts.mongodb.net/test?retryWrites=true&w=majority')
    .then(() => {
        console.log('Connected to DB');
    })
    .catch(() => {
        console.log('Connection failed');
    });



//BodyParser
app.use(bodyParser.json());       
// app.use(bodyParser.urlencoded({extended: false}));       

//make image folder accessible
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/', express.static(path.join(__dirname, 'angular')));


app.use('/api/posts', routerPosts);
app.use('/api/user', userRoutes);
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'angular','index.html'));
});


module.exports = app;