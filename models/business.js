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