# Task Management App
This is a task management app used with React. The user is able to view tasks, add their own tasks and delete tasks.

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
- Login functionality is currently being worked on. This would allow for a further feature, where users are only able to delete and edit their own tasks.
