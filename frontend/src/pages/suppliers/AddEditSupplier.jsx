import { useState } from 'react';
import {
  Box,
  Typography,
  Paper
} from '@mui/material';

function AddEditSupplier() {
  return (
    <Box>
      <Typography variant="h5" component="h1" gutterBottom>
        Add/Edit Supplier
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography>
          Supplier form coming soon...
        </Typography>
      </Paper>
    </Box>
  );
}

export default AddEditSupplier;