const express = require("express")
const Task = require('../models/Task')

const getAllTasks = async (req,res)=>{
    try {
        const tasks = await Task.find({})
        res.send({tasks})
    } catch (error) {
        res.status(400).send(error)
    }
    
}

const createTask = async (req,res)=>{
    try {
        const task = await Task.create(req.body)
        res.send({task})
    } catch (error) {
        res.status(400).send({status : error})
    }
}
const getTask = async (req,res)=>{
    try {
        const { id: taskID } = req.params
        const task = await Task.findOne({ _id: taskID })
        res.send({task})
    } catch (error) {
        res.status(400).send(error)
    }
    
}
const updateTask = async (req,res)=>{
    try {
        const { id: taskID } = req.params
        const task = await Task.findByIdAndUpdate({ _id: taskID },req.body,{
            new:true,runValidators: true,
        })
        res.send({task})
    } catch (error) {
        res.status(400).send(error)
    }
    
}
const deleteTask = async (req,res)=>{
    try {
        const { id: taskID } = req.params
        const task = await Task.findOneAndDelete({ _id: taskID })
        res.send({task})
    } catch (error) {
        res.status(400).send(error)
    }
    
}



module.exports = {
    getAllTasks,createTask,getTask,updateTask,deleteTask
}