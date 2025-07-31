const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb://127.0.0.1:27017/react-connect")
const userschema = mongoose.Schema({
    username: String
})
const User = mongoose.model("User", userschema)
app.post("/signup", async (req, res) => {
    try {
        const { username } = req.body
        const newUser = new User({ username })
        await newUser.save()
        res.send()
    } catch (error) {
        res.send(error)
    }
})
app.listen(5000)