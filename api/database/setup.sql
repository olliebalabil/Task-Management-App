DROP TABLE IF EXISTS task;

CREATE TABLE task (
    task_id INT GENERATED ALWAYS AS IDENTITY,
    task_name VARCHAR(30) UNIQUE NOT NULL,
    task_notes VARCHAR(500)
    
);

INSERT INTO task
    (task_name, task_notes)
VALUES
    ('Example Task', 'This is the note section for the example');
