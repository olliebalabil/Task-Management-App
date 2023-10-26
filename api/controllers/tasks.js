const Task = require("../models/tasks.js");

async function index (req, res) {
    try {
        const tasks = await Task.getAll();
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json({"error": err.message})
    }
}

async function show (req, res) {
    try {
        const id = parseInt(req.params.id);
        const task = await Task.getOneById(id);
        res.status(200).json(task);
    } catch (err) {
        res.status(404).json({"error": err.message})
    }
}


async function create (req, res) {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    } catch (err) {
        res.status(404).json({"error": err.message})
    }
}


async function update (req, res) {
    try {
        const id = parseInt(req.params.id);
        const data = req.body;
        const task = await Task.getOneById(id);
        const result = await task.update(data);
        res.status(200).json(result);
    } catch (err) {
        res.status(404).json({"error": err.message})
    }
}

async function destroy (req, res) {
    try {
        const id = parseInt(req.params.id);
        const task = await Task.getOneById(id);
        await task.destroy();
        res.sendStatus(204);
    } catch (err) {
        res.status(404).json({"error": err.message})
    }
}

module.exports = {
    index, show, update, create, destroy
}
