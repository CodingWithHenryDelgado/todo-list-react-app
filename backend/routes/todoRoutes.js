const router = require('express').Router();
const Todo = require('../models/Todo.js');

router.get('/', (req, res) => {
    Todo.find((err, result) => {
        if (err) throw new Error(err)
        res.json(result)
    });
})

router.post("/", (req, res) => {
    return Todo.create(req.body, (err, result) => {
        if (err) throw new Error(err)
        res.json(result)
    });
})

router.put("/:id", (req, res) => {
    Todo.findOneAndUpdate({ _id: req.params.id }, req.body, (err, result) => {
        if (err) throw new Error(err);
        res.json(result)
    })
})

router.delete("/:id", (req, res) => {
    return Todo.findOneAndRemove({ _id: req.params.id }, (err, result) => {
        if (err) throw new Error(err)
        res.end()
    })
})

module.exports = router;