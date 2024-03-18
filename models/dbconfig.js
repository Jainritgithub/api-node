const mongoose = require("mongoose")

exports.dbConnection = async ()=>{
    try {
        mongoose.connect(process.env.MONGO_URL)
        console.log("Connection is Established !")
    } catch (error) {
        console.log(error.message)
    }
}