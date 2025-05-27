import { useState } from 'react';
import {
  Box,
  Typography,
  Paper
} from '@mui/material';

function Suppliers() {
  return (
    <Box>
      <Typography variant="h5" component="h1" gutterBottom>
        Suppliers
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography>
          Supplier management interface coming soon...
        </Typography>
      </Paper>
    </Box>
  );
}

export default Suppliers;