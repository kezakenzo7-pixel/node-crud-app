const users = [
    { id: 1, name: 'keza', email: 'keza@gmail.com' },
    { id: 2, name: 'john', email: 'john@gmail.com' }
];

function getUsers() {
    return users;
}

function createUser(userData) {
    const { name, email } = userData;

    if (!name || !email) {
        throw new Error('Name and email are required');
    }

    const newUser = {
        id: users.length + 1,
        name,
        email
    };

    users.push(newUser);
    return newUser;
}

module.exports = {
    getUsers,
    createUser
};
