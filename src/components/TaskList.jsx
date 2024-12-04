import { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, IconButton, Typography, Box } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';

const TaskList = ({ tasks, onTaskDeleted }) => {
  const handleDelete = async (id) => {
    await onTaskDeleted(id);
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Lista de Tarefas
      </Typography>
      <List>
        {tasks.map((task) => (
          <ListItem
            key={task.id}
            secondaryAction={
              <IconButton edge="end" color="error" onClick={() => handleDelete(task.id)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText
              primary={task.title}
              secondary={task.description || 'Sem descrição'}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TaskList;
