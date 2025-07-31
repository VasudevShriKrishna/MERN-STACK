const mg = require("mongoose")
mg.connect("mongodb://127.0.0.1:27017/K2").then(() => {
    console.log("success")
}).catch((err) => { console.log(err) })

mg.pluralize(null)
const myschema = new mg.Schema(
    {
        name: { type: String, required: true },
        surname: String,
        age: Number,
        active: Boolean,
        date: { type: Date, default: new Date() }
    }
)

const person = new mg.model("P1", myschema)
const createDoc = async () => {
    try {
        const persondata = [
            { name: "test", surname: "test1", age: 25, active: false },
            { name: "Ksh1", surname: "k1", age: 28, active: true },
            { name: "Ksh2", surname: "k2", age: 29, active: true }
        ]
        const result = await person.insertMany(persondata)
        console.log("Completed", result)
        const result1 = await person.find({ name: "test" }).limit(1)
        console.log(result1)
    }
    catch (err) { console.log(err) }
}
createDoc()