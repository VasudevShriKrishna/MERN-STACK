const express = require('express');
const mg = require('mongoose');
const cors = require('cors')
const app = express();

app.use(cors()) // cors communicate backend and frontend
app.use(express.json());

mg.connect('mongodb://127:0.0.1:27017/db1');
mg.pluralize(null)
const UserSchema = new mg.Schema({
    username: String, email: String, password: String
});

const User = mg.model('User', UserSchema);

app.post('/api/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        // const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: password });
        await newUser.save();
        res.status(201).json({ message: "User signed up successfully " });
    } catch (error) {
        res.status(500).json({ error: "An error occurred " });
    }
})

app.listen(5000)