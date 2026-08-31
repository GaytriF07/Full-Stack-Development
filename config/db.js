const mongoose = require("mongoose");

const connectDB = async () => {
    mongoose.connect("mongodb://localhost:27017/CCA")
        .then(() => {
            console.log("Database Connected !");
        })
        .catch((e) => {
            console.log("Error", e)
        })
}

module.exports = connectDB;