const express = require('express');
const app = express();

app.use(express.json());

// 👇 IMPORTANT: routes must be imported
const studentRoutes = require('./routes/studentRoutes');

// 👇 IMPORTANT: routes must be used like this
app.use('/students', studentRoutes);

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});