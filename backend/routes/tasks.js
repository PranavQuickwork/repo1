const express = require('express');
const Task = require('../models/Task')
const router = express.Router();

//GET all tasks 
router.get('/',async(res,req)=>{
    try{
        const tasks=await Task.find();//fetch all tasks from db
        res.json(tasks);
    }catch(err){
        res.status(500).json({ message: err.message });
    }
});

//POst all tasks
router.post('/', async (req, res) => {
    const task = new Task({ title: req.body.title }); // Create a new Task with the title.
    try {
      const newTask = await task.save(); // Save the task to the database.
      res.status(201).json(newTask); // Send the created task.
    } catch (err) {
      res.status(400).json({ message: err.message }); // Handle errors.
    }
  });


  //TO delete

  router.delete('/:id', async (req, res) =>{
    try{
        await Task.findbyIdandDelete(req.params.id);
        res.json({message : 'Task Deleted'});
    }

    catch(err){
        res.status(500).json({message : err.message})
    }
  });


  module.exports=router;//exporting router to use in server backend