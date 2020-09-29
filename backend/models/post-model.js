const mongoose = require('mongoose');

//create schema/blueprint
const postSchema = mongoose.Schema({
    //id gets put in automatically 
    title: {type: String, required:true, },
    content: {type: String, required:true, },
    imagePath: {type: String, required: true, },
    creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, }
});

//turn blueprint into model
module.exports = mongoose.model('Post', postSchema);

