const User = require("../models/userModel")

exports.homePage = (req,res,next)=>{
    res.status(200).json({success: true, message: "This is a test route"})
}

exports.createUser =async (req,res,next)=>{
    try {
        const newUser = new User(req.body)
        await newUser.save()
        res.status(200).json({success: true, user: newUser})
    } catch (error) {
        console.log(error.message)
    }
}