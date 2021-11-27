var jwt = require("jsonwebtoken");
const KEY = require('./strings')

const authenticator = async (req, res, next)=>{
  const token = req.cookies.token || req.headers.authorization || ""
  //mainToken=token.split(" ")[1]

  // console.log(token)
  if(!token){
    return res.status(400).send("login first")
  }
  try {
    const decrypt = await jwt.verify(token, KEY)
   // console.log(decrypt)

    req.user={
      _id :decrypt._id
    }
    next();
  } catch (e) {
    return res.status(500).send("auth error")
  }
}



module.exports = authenticator;
