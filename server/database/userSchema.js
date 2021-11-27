const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name:String,
    email: String,
    bio: String,
    private:{
        type:Boolean,
        default:true
    },
    //dpUrl :String,
    username :{
        type : String,
        unique : true,
        requred :true
    },
    password : {
        type : String,
        requred :true
    },
    moments:[
        {
            user_id:String,
            user_username:String,
            user_dp:String,
            imageUrl :String,
            caption:String,
            liked_by :[{
              persion_id:String
            }],
            comments:[{
                persion_id : String,
                comment:String
            }],
        }],
    Boundings:[{
        persion_id:String
    }],
    requested_Bounds:[{
        persion_id:String
    }],
    requesting_Bounds:[{
        persion_id:String
    }]
})

module.exports = User = mongoose.model("users", UserSchema);
