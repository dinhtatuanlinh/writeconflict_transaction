const { workerData, parentPort } = require('worker_threads')
const mongoose = require("mongoose");
const rolesModel = require("./../schema/database").rolesModel;
let Id = mongoose.Types.ObjectId("6191f904d3029488c3b792db")
rolesModel
      .updateOne({ _id: Id }, { role: workerData })
      .then((result, err) => {
        console.log(err);
        console.log(result);
      });
parentPort.postMessage({hello: workerData});

    