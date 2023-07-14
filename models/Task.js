const mongoose = require("mongoose")

const Task = new mongoose.Schema({
    name : {type : String , required : true},
    completed : {type : Boolean,default : false}
})

module.exports = mongoose.model('Task',Task)