let students = require('../model/studentModel');


// CREATE
exports.createStudent = (req, res) => {
    const student = {
        id: Date.now(),
        name: req.body.name,
        age: req.body.age
    };

    students.push(student);
    res.status(201).json(student);
};

// READ ALL
exports.getStudents = (req, res) => {
    res.json(students);
};

// READ ONE
exports.getStudent = (req, res) => {
    const student = students.find(s => s.id == req.params.id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
};

// UPDATE
exports.updateStudent = (req, res) => {
    const student = students.find(s => s.id == req.params.id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    student.name = req.body.name || student.name;
    student.age = req.body.age || student.age;

    res.json(student);
};

// DELETE
exports.deleteStudent = (req, res) => {
    const index = students.findIndex(s => s.id == req.params.id);

    if (index === -1) {
        return res.status(404).json({ message: "Student not found" });
    }

    students.splice(index, 1);
    res.json({ message: "Student deleted" });
};
