const express = require("express");
const rolesModel = require("./../schema/database").rolesModel;

const mongoose = require("mongoose");
let router = express.Router();


let createWriteConflict = (req, res, next) => {
    for (i = 0; i < 200; i++) {
        let Id = mongoose.Types.ObjectId("6191f904d3029488c3b792db");
        rolesModel
            .updateOne({ _id: Id }, { role: i.toString() })
            .then(result => {
                console.log(result);
            })
            .catch(err=>{
                console.log(err);
            })
    }
};

module.exports = () => {
    // login and register
    router.get("/", (req, res, next) => createWriteConflict(req, res, next));

    return router;
};
