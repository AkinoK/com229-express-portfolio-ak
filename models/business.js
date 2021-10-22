<<<<<<< HEAD
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

=======
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

>>>>>>> dd6c681507599ea9f1f2adcfbe9aa99cf1ee1b37
module.exports = mongoose.model('Business', businessModel);