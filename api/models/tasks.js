const db = require("../database/connect");

class Task {

    constructor ({ task_id, task_name, task_notes }) {
        this.id = task_id;
        this.name = task_name;
        this.notes = task_notes;
    }

    static async getAll() {
        const response = await db.query("SELECT * FROM task;");
        return response.rows.map(g => new Task(g));
    }

    static async getOneById(id) {
        const response = await db.query("SELECT * FROM task WHERE task_id = $1;", [id]);
        if (response.rows.length != 1) {
            throw new Error("Unable to locate task.")
        }
        return new Task(response.rows[0]);
    }

    static async create(data) {
        const{task_name, task_notes} = data;   
        const response = await db.query('INSERT INTO task (task_name, task_notes) VALUES ($1, $2) RETURNING *;', [task_name, task_notes]);

        return response.rows.map(w => new Task(w))
    }

    async update(data) {
        const response = await db.query("UPDATE task SET task_notes = $1 WHERE task_id = $2 RETURNING *;",
            [ data.task_notes, this.id ]);
        if (response.rows.length != 1) {
            throw new Error("Unable to update notes.")
        }
        return new Task(response.rows[0]);
    }

    async destroy() {
        const response = await db.query('DELETE FROM task WHERE task_id = $1 RETURNING *;', [this.id]);
      
        return new Task(response.rows[0]);
    }


}

module.exports = Task;