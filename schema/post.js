var mongoose = require("mongoose");

var schema = mongoose.Schema({

    post: {
        type: Array,
        required: true,
    },
});

var model = mongoose.model("post", schema);

module.exports = model;
