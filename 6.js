// create database connection and add one collection named task and insert multiple
// documents and fields like sname,age,rollno,city in collection task and find some document
// 1. find sname of all task having age>5
// 2. Increase the rollno for all task by 1
// 3. Arrange all the records in desc order
// 4. delete the records of task if rollno is 12
// 5. count the no of task who have age>50
// 6. find documents sname like ends with ab
// 7. find documents where sname contains only 4 or 5 letters
// 8. update all sname 

const mg = require("mongoose")
mg.connect("mongodb://127.0.0.1:27017/C7").then(() => { console.log("success") }).catch((err) => { console.log(err) })
mg.pluralize(null)

const myschema = new mg.Schema(
    { sname: String, age: Number, rollno: Number, city: String }
)

const person = new mg.model("task", myschema)
const createDoc = async () => {
    try {
        const persondata = [
            { sname: "abcd", age: 5, rollno: 35, city: "Amreli" },
            { sname: "wondr", age: 21, rollno: 198, city: "Ahmedabad" },
            { sname: "k", age: 55, rollno: 35, city: "Amreli" },
            { sname: "l", age: 8, rollno: 198, city: "Ahmedabad" },
            { sname: "ohbabab", age: 57, rollno: 12, city: "Amreli" },
            { sname: "r", age: 19, rollno: 198, city: "Ahmedabad" },
        ]
        const result = await person.insertMany(persondata)
        console.log(result)
    }
    catch (err) { console.log(err) }
}

createDoc()