var mongoose = require("mongoose");
var schema = mongoose.Schema({
    user: {
        type: String,
        required: true,
    },
    numberOfPost: {
        type: Number,
        default: 0,
        required: true,
    },
});

var model = mongoose.model("user", schema);

module.exports = model;
