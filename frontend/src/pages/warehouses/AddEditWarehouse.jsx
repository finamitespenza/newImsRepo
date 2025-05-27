import { useState } from 'react';
import {
  Box,
  Typography,
  Paper
} from '@mui/material';

function AddEditWarehouse() {
  return (
    <Box>
      <Typography variant="h5" component="h1" gutterBottom>
        Add/Edit Warehouse
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography>
          Warehouse form coming soon...
        </Typography>
      </Paper>
    </Box>
  );
}

export default AddEditWarehouse;