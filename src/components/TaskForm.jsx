import { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const TaskForm = ({ onTaskAdded }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = { title, description, completed: false };
    await onTaskAdded(newTask);
    setTitle('');
    setDescription('');
  };

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Adicionar Nova Tarefa
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          multiline
          rows={3}
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" color="primary">
          Adicionar Tarefa
        </Button>
      </form>
    </Box>
  );
};

export default TaskForm;
