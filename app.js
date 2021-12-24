const mongoose = require("mongoose");

const usersModel = require("./schema/user");
const postsModel = require("./schema/post");
mongoose
    .connect(
        "mongodb+srv://tuanlinh:0123698745@cluster0.06xjh.mongodb.net/linh?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then((response) => {
        addPost();
    });
// vHLAre7GJ1tPZIb0
let addPost = () => {
    let dataPost = "fasdlfkjsadklfjsdaklfjd";
    let session;

    usersModel
        .startSession()
        .then((_session) => {
            session = _session;
            session.startTransaction();
            return usersModel.updateOne(
                { _id: "61923285844e9df68880a6dc" },
                { $inc: { numberOfPost: 1 } },
                { session }
            );
        })
        .then((result) => {
            return postsModel.updateOne(
                { _id: "61923265844e9df68880a6d9" },
                { $push: { post: dataPost } },
                { session }
            );
        })
        .then((result) => {
            return session.commitTransaction();
        })
        .then(() => {
            console.log("run");
            session.endSession();
        })
        .catch((err) => {
            session.abortTransaction().then((result) => {
                session.endSession();
                console.log(err);
            });
        });

    // await session.abortTransaction();
    // await session.commitTransaction();
};
