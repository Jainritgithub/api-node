const mongoose = require("mongoose")
const userModel = new mongoose.Schema({
   username: 
    {
        type: String,
        unique: true,
        trim: true,
        required: [true, "Username is required"],
    },
   
   email:
   {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: [true, "Email address is required"],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
},
   
   password:
    {
        type: String,
        unique: true,
        required: [true, "Password is required"],
        minlength: [5, "Please enter atleast 5 charector"],
        maxlength: [15, "Please enter atmost 15 charector"]
    }
}, {timestamps: true})

const user = mongoose.model("user", userModel)
module.exports = user