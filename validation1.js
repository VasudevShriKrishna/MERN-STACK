var v = require('validator')
var mg = require('mongoose')
mg.connect("mongodb://127.0.0.1:27017/STDC7").then(() => { console.log("success") }).catch((err) => { console.log(err) })
mg.pluralize(null)

const myschema = new mg.Schema({
    age: {
        type: Number,
        validate(val) {
            if (val <= 0) { throw new Error("must be positive") }
        }
    },

    email: {
        type: String,
        validate(v1) {
            if (!v.isEmail(v1)) { throw new Error("invalid email") }
        }
    },

    gender: { type: String, enum: ['MALE', 'FEMALE'] }
})

const person = new mg.model("C7", myschema)
const personData = new person({
    age: 21, email: "123@gmail.com", gender: "MALE"
})

personData.save()