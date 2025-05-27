import { useState } from 'react';
import {
  Box,
  Typography,
  Paper
} from '@mui/material';

function StockAdjustments() {
  return (
    <Box>
      <Typography variant="h5" component="h1" gutterBottom>
        Stock Adjustments
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography>
          Stock adjustment interface coming soon...
        </Typography>
      </Paper>
    </Box>
  );
}

export default StockAdjustments;