const express = require('express');
const cors = require('cors');

const taskRouter = require('./routers/tasks');
const userRouter = require('./routers/user');


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
api.use("/users",userRouter)

module.exports = api;