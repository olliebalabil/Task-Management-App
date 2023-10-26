# Task Management App

This is a task management app used with React. The user is able to view tasks, add their own tasks and delete tasks. The user can register and login to an account. Once logged in, when they create a task, their username will appear as the creator when the task is displayed. If the user isn't logged in when they create a task, the task will be displayed as having an anonymous user. Users are only able to delete their own tasks and anonymous tasks.


## Installation
- Clone the repository.
- Navigate to the repository in the terminal.
- Navigate to `/client` and call `npm i` in the terminal.
- Call `npm run dev` in the terminal and go to the specified local host in the browser.

## Running the server
- In elephantSQL, create a new instance and copy its URL.
- In a separate terminal, navigate to `/api`.
- Call `npm i` in the terminal.
- In this folder, create a `.env` file containing this: 
```
PORT=3000
DB_URL=[paste copied URL here]
```
- Call `npm setup-db` in the terminal.
- Call `npm run dev`.

## Future features
- A feature that allows users to edit tasks.
- A feature that allows users to check tasks once completed.
- A feature that allows users to filter the tasks displayed. This could be based on whether they are completed, the task's creator, the name of the task or the date the task was created.

