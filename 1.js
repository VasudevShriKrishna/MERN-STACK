const mg = require("mongoose")
mg.connect("mongodb://127.0.0.1:27017/EMP1").then(() => {
    console.log("success")
}).catch((err) => { console.log(err) })

mg.pluralize(null)
const myschema = new mg.Schema(  // structure for field
    {
        Name: { type: String, required: true },
        Surname: String,
        age: Number,
        active: Boolean,
        date: { type: Date, default: new Date() }
    }
)

const person = new mg.model("student", myschema)

const createDoc = async () => {
    try {
        const personData = new person({
            Name: "def",
            Surname: "test",
            age: 21,
            active: true
        })
        const result = await personData.save()
        console.log(result);
    }
    catch (err) { console.log("err") }
}
createDoc()