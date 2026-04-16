const userscontroller = require('../controller/users.controller');
exports.getUsers =async (req, res) => {
    try {
        const users = await userscontroller.getUsers();
        res.status(200).json({ data: users, message: "Users retrieved successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    } 
};