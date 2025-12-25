import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Get all tasks
export const getTasks = () => api.get('/');

// Add task
export const addTask = (task) => api.post('/', task);

// Update task
export const updateTask = (id, task) => api.put(`/${id}`, task);

// Delete task
export const deleteTask = (id) => api.delete(`/${id}`);
