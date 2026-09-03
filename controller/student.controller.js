const Student = require("../model/student.model");
const redis = require("../utils/connect.redis");
exports.addStudent = async (req, res) => {
    try {
        console.log("hello !!!!", req.body)
        const data = req.body;
        console.log(data)
        const newStudent = new Student(data);
        await newStudent.save();

        res.status(201).json({ success: true, message: "Student Created Successfully" });
    } catch (e) {
        console.log(e.message)
        res.status(500).json({ message: "Internal Server Error" });
    }
}

exports.getStudent = async (req, res) => {
    try {
        const cachedStudents = await redis.get("students");
        if (cachedStudents) {
            console.log("cached data found")
            return res.status(200).json({ data: cachedStudents });
        }


        const getStudent = await Student.find();

        await redis.set("students", JSON.stringify(getStudent));
        
        res.status(200).json({ data: getStudent })
    } catch (error) {
        console.log("error:", error.message)
        res.status(500).json({ error: error })
    }
}