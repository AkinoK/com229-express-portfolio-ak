/* File name : models/app.css
Student name : Akino Kashima 
Student ID : 301155967
Date: 10.23.2021  */

let mongoose = require('mongoose');


// Create a model class
let businessModel = mongoose.Schema(
    {
        contactName: String,
        contactNumber: Number,
        email: String,
    },
    {
        collection: "business"
    }
);

module.exports = mongoose.model('Business', businessModel);