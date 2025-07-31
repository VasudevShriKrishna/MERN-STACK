const mg = require('mongoose')
mg.connect("mongodb://127.0.0.1:27017/C7").then(() => { console.log("success") }).catch((err) => { console.log(err) })
mg.pluralize(null)

const myschema = new mg.Schema(
    { name: String, surname: String, age: Number, active: Boolean }
)
const person = new mg.model("t4", myschema)
// const createDoc = async () => {
//     try {
//         const persondata = [
//             { name: "test", surname: "test1", age: 25, active: true },
//             { name: "abc", surname: "pq", age: 28, active: true },
//         ]
//         const result = await person.insertMany(persondata)
//         console.log(result)
//     }
//     catch (err) { console.log(err) }
// }

// createDoc()

// const updateDoc = async (i) => {
//     const result = await person.updateOne({ _id: i }, { $set: { age: 40 } })
//     console.log(result)
// }
// updateDoc('686cbb62b2958f23e9ae2d7a')

const updateDoc = async (i) => {
    const result = await person.updateMany({ _id: i }, { $set: { age: 40 } })
    console.log(result)
}
updateDoc('686cbb62b2958f23e9ae2d7a')