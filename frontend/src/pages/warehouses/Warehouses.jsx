import { useState } from 'react';
import {
  Box,
  Typography,
  Paper
} from '@mui/material';

function Warehouses() {
  return (
    <Box>
      <Typography variant="h5" component="h1" gutterBottom>
        Warehouses
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography>
          Warehouse management interface coming soon...
        </Typography>
      </Paper>
    </Box>
  );
}

export default Warehouses;