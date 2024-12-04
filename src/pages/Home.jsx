import { useState, useEffect } from 'react';
import { Container, Paper, Box } from '@mui/material';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import api from '../api';

const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await api.get('/');
      setTasks(response.data);
    };
    fetchTasks();
  }, []);

  const handleAddTask = async (newTask) => {
    const response = await api.post('/', newTask);
    setTasks((prev) => [...prev, response.data]);
  };

  const handleDeleteTask = async (id) => {
    await api.delete(`/${id}`);
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <TaskForm onTaskAdded={handleAddTask} />
        <TaskList tasks={tasks} onTaskDeleted={handleDeleteTask} />
      </Paper>
    </Container>
  );
};

export default Home;
