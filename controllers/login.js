require('dotenv').config();
const base64url = require('base64url');
const crypto= require('crypto');

let login = {username: 'linh', pass: "1234"}

let getLogin = (req, res, next)=>{
    res.render(`login/login`);
}
let postLogin = (req, res, next) => {
    if(req.body.user === login.username && req.body.pass === login.pass){
        let header = {
            typ: "JWT",
            alg: "HSA256"
        }
        let payload = {
            username: req.body.user,
            iss: "linh",
            iat: Date.now()
        }
        header = base64url(JSON.stringify(header));
        payload = base64url(JSON.stringify(payload));
        let data = `${header}.${payload}`

        let hashedData = crypto.createHash('sha256').update(`${data}.${process.env.SECRETKEY}`).digest('base64');
        let signature = base64url(hashedData);
        let token = `${data}.${signature}`;
        res.send(token);
    }
    
}
let verifyToken = (req, res, next)=>{
    let token = req.headers.authorization.replace('bearer ', '')
    token = token.split('.')
    // console.log(token);
    let data = `${token[0]}.${token[1]}`;
    let hash = crypto.createHash('sha256').update(`${data}.${process.env.SECRETKEY}`).digest('base64');
    let signature = token[2];
    console.log(signature);
    console.log(base64url(hash));
    if(signature === base64url(hash)){

        console.log('đúng');
    }
}

module.exports = {
    getLogin: getLogin,
    postLogin: postLogin,
    verifyToken: verifyToken
};