const mg = require("mongoose")
mg.connect("mongodb://127.0.0.1:27017/k1").then(() => {
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

const person = new mg.model("Person", myschema)

const createDoc = async () => {
    try {
        const personData = new person(
            { name: "abc", surname: "pqr", age: 23, active: false }
        )
        const personData1 = new person(
            { name: "jkl", surname: "ghi", age: 20, active: false }
        )
        const result = await person.insertMany([personData])
        console.log(result);
    }
    catch (err) { console.log(err) }
}
createDoc()