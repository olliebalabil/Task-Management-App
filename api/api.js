const express = require('express');
const cors = require('cors');

const taskRouter = require('./routers/tasks');

const api = express();

api.use(cors());
api.use(express.json());

api.get("/", (req, res) => {
    res.json({
        title: "Tasks",
        description: "API for task management app"
    })
})

api.use("/tasks", taskRouter);

module.exports = api;