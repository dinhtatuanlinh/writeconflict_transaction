const express = require("express");
const expressLayouts = require('express-ejs-layouts');

// khai bao bang let pham vi chi o trong file
let configViewEngine = (app) => {
    app.use(express.static("./public")); // cấu hình đường link static để khi truy cập vào ten miền sẽ truy cập thẳng vào file public
    // cấu hình view engine
    app.set("view engine", "ejs");
    // cấu hình đường link tới thư mục views
    app.set("views", "./views");
    // set layout
    app.use(expressLayouts);
    app.set('layout', './../views/layout');
};
module.exports = configViewEngine;