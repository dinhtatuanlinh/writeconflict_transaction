const mongoose = require("mongoose")

const usersModel = require("./schema/user");
const postsModel = require("./schema/post");
	mongoose.connect("mongodb+srv://tuanlinh:0123698745@cluster0.06xjh.mongodb.net/linh?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true})
	.then(response => {
        console.log("run");
        for(i=0; i<200; i++){
            usersModel.updateOne(
                { _id: "61923285844e9df68880a6dc" },
                { numberOfPost: i } 
            ).then(result=>console.log(result))
            .catch(err=>console.log(err))
            // console.log(i);
        }

        console.log("finish");
    })