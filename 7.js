const mg = require("mongoose")
mg.connect("mongodb://127.0.0.1:27017/C7").then(() => { console.log("success") }).catch((err) => { console.log(err) })
mg.pluralize(null)

const myschema = new mg.Schema(
    { id: String, name: String, age: Number, position: String, salary: Number }
)

const emp = new mg.model("Employees", myschema)
const createDoc = async () => {
    try {
        const persondata = [
            { id: "1", name: "Eric", age: 30, position: "Full Stack Developer", salary: 60000 },
            { id: "2", name: "Erica", age: 35, position: "Intern", salary: 8000 },
            { id: "3", name: "Erical", age: 40, position: "UX/UI designer", salary: 56000 },
            { id: "4", name: "treric", age: 37, position: "Team Leader", salary: 85000 },
            { id: "5", name: "Eliza", age: 25, position: "Software Developer", salary: 45000 },
            { id: "6", name: "Trian", age: 29, position: "Data Scientist", salary: 75000 },
            { id: "7", name: "Elizan", age: 25, position: "Full Stack Developer", salary: 49000 }
        ]
        const result = []
        result.push(await emp.insertMany(persondata))
        result.push(await emp.find())
        result.push(await emp.find({ position: "Full Stack Developer" }))
        console.log(result)
    }
    catch (err) { console.log(err) }
}

createDoc()

//create collection named employee with following data: 1) Find All Documents:
// 2) Find Documents by Position “Full Stack Developer”:
// 3) Retrieve name of employees whose age is greater than or equal to 25
// and less than or equal to 40.
// 4) Retrieve name of the employee with the highest salary.
// 5) Retrieve employees with a salary greater than 50000.
// 6) Find documents where name end withlike “%an”

// frontend in react and Mern stacka and backend in python

// indexing : single indexing, multiple MIMP in exam