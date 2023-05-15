const Task = require('../models/task')
const asyncWrapper = require('../middleware/async')
const {createCustomError} = require('../errors/custom-error')

const getAllTasks = asyncWrapper(async (req,res)=>{
        const tasks = await Task.find({})
        res.status(200).json({tasks})  
})

const createTask = asyncWrapper( async (req,res, next) => {
const task = await Task.create(req.body)
    res.status(201).json({task})
})

const getTask = asyncWrapper( async (req,res) => {
        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID});
        if(!tast){
          return next(createCustomError(`No task with id : ${taskId}`, 404))
        }
 res.status(200).json({task});
//   res.status(200).json({task, amount:tasks.length});
//   res.status(200).json({success: true, data:{tasks}, });
})

const deleteTask = asyncWrapper( async (req,res) => {
const {id:taskID} = req.params
const task = await Task.findOneAndDelete({_id:taskID})
if(!tast){
            return next(createCustomError(`No task with id : ${taskId}`, 404))
        }
        res.status(200).json({task})
    res.send('delete task')
})

const updateTask = asyncWrapper( async (req,res) => {
        const {id:taskId}=req.params;
        const task = await Task.findOneAndUpdate({_id:taskID}, req.body,{
            new:true,
             runValidators:true
        })
        if(!tast){
            return next(createCustomError(`No task with id : ${taskId}`, 404))
        }
res.status(200).json({id:taskId, data:req.body})

})

const editTask = asyncWrapper( async (req,res) => {
        const {id:taskId}=req.params;
        const task = await Task.findOneAndUpdate({_id:taskID}, req.body,{
            new:true,
             runValidators:true,
             overWrite:true,
        })
        if(!tast){
            return res.status(404).json({mag:`No task with id : ${taskId}`})
        }

res.status(200).json({id:taskId, data:req.body})

})

module.exports ={
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
    editTask,
}
