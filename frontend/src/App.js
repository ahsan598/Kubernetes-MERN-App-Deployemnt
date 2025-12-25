import React from 'react';
import Tasks from './Tasks';
import { Paper, TextField, Checkbox, Button } from '@mui/material';
import './App.css';

class App extends React.Component {
  state = { tasks: [], currentTask: '' };

  tasksHelper = new Tasks(this);

  render() {
    const { tasks, currentTask } = this.state;

    return (
      <div className="app">
        <header className="app-header">
          <h1>My To-Do List</h1>
        </header>

        <div className="main-content">
          <Paper elevation={3} className="todo-container">
            <form onSubmit={this.tasksHelper.handleSubmit} className="task-form">
              <TextField
                variant="outlined"
                size="small"
                className="task-input"
                value={currentTask}
                required
                onChange={this.tasksHelper.handleChange}
                placeholder="Add New TO-DO"
              />

              <Button
                className="add-task-btn"
                variant="contained"
                type="submit"
              >
                Add Task
              </Button>
            </form>

            <div className="tasks-list">
              {tasks.map((task) => (
                <Paper key={task._id} className="task-item">
                  <Checkbox
                    checked={task.completed}
                    onChange={() => this.tasksHelper.handleUpdate(task._id)}
                  />

                  <div className={task.completed ? 'task-text completed' : 'task-text'}>
                    {task.task}
                  </div>

                  <Button
                    onClick={() => this.tasksHelper.handleDelete(task._id)}
                    color="error"
                    className="delete-task-btn"
                  >
                    Delete
                  </Button>
                </Paper>
              ))}
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}

export default App;
