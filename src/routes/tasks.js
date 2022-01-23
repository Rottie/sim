const express = require('express');

const Task = require('../models/task');

const router = express.Router();


//Create
router.get('/', (req, res) => {
  Task.find({})
    .then(tasks => res.json(tasks))
    .catch(err => res.status(500).json({ error: err }));
});


//Create
router.post('/add', (req, res) => {
  const { title } = req.body;
  const newTask = new Task({ title });

  newTask.save()
    .then(task => res.json(task))
    .catch(err => res.json(500, err));
});


//Delete
router.delete('/delete/:id', (req, res) => {
  const id = req.params.id;

  Task.findByIdAndDelete(id)
    .then(task => res.json(task))
    .catch(err => res.json(500, err));
});


//Update
router.post('/update/:id', (req, res) => {
  const { done } = req.body;
  Task.findByIdAndUpdate(req.params.id, { done })
    .then(task => res.json(task))
    .catch(err => res.json(500, err));
});

module.exports = router;
