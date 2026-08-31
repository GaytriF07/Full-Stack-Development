const router = require("express").Router()

const {
    addStudent,
    getStudent,
} = require("../controller/student.controller");

router.post("/create", addStudent);
router.get("/get", getStudent);
module.exports = router;