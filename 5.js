const mg = require('mongoose')
mg.connect("mongodb://127.0.0.1:27017/C7").then(() => { console.log("success") }).catch((err) => { console.log(err) })
mg.pluralize(null)

const myschema = new mg.Schema(
    { name: String, surname: String, age: Number, active: Boolean }
)
const person = new mg.model("t5", myschema)
// const createDoc = async () => {
//     try {
//         const persondata = [
//             { name: "abc1", surname: "def", age: 25, active: true },
//             { name: "abc", surname: "pq", age: 28, active: true },
//         ]
//         const result = await person.insertMany(persondata)
//         console.log(result)
//     }
//     catch (err) { console.log(err) }
// }

// createDoc()

// const Deletedoc = async (_id) => {
//     const result = await person.deleteOne({ _id })
//     console.log(result)
// }

// Deletedoc("686cbdafc2c1de303f17a7f5")

const Deletedoc1 = async (_id) => {
    const result = await person.findByIdAndDelete({ _id })
    console.log(result)
}

Deletedoc1("686cbdafc2c1de303f17a7f6")
