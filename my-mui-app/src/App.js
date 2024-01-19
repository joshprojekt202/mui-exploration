import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <div style={{ margin: 20 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to MUI
      </Typography>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  );
}

export default App;