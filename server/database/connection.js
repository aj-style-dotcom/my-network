
const mongoose = require('mongoose')

const atlasDB ="mongodb+srv://ankit:ankit@mytestcluster.ddtjq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const localDB = "mongodb://localhost:27017/"

mongoose.connect(atlasDB, {
    useNewUrlParser: true,
    useCreateIndex: true, 
    useUnifiedTopology: true
  }).then(()=> {
    console.log("connected to database ✔️")
  }).catch((err)=> console.log("can't connect to database ❌"+"\n"+err))
  
