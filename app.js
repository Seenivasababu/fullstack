const express = require("express")
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/DBConnection')
require('dotenv').config();

app.use(express.json())

app.use(express.static('./public'))

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(5000,()=>{
            console.log("Server up and running on port 5000")
        })
    } catch (error) {
        console.log(error);
    }
    
}

start()
app.get('/hello',(req,res)=>{
    res.send("Hello world")
})

app.use('/api/v1/tasks',tasks)

