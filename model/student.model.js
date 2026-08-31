const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    name: {
        type: String
    },
    sClass: String,
    dob: String,
    phone: String,
    email: String,
    address: String,
    rollNo: String,
    college: String
}, {
    timestamps: true
})
const Student = mongoose.model("Student", studentSchema);
module.exports = Student