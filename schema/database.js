const mongoose = require("mongoose");

// mongoose.connect('mongodb://tuanlinh:164342816@115.79.35.159:27017/admin');
mongoose.connect('mongodb://localhost:27017/admin');

const connectionDatabase = mongoose.connection;
connectionDatabase.on('error', () => { console.log('connection error') }); // phải dùng function hoặc arrow function ở đây



connectionDatabase.once('open', function() {
    // we're connected! 
    console.log('database connected');
    var collections = Object.keys(connectionDatabase.collections);


});

module.exports = connectionDatabase