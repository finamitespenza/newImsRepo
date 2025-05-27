import { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

// Mock Data for Stock Adjustments
const mockStockAdjustments = [
  { id: 1, date: '2023-11-01', item: 'Laptop Pro', quantity: -2, reason: 'Damaged Stock' },
  { id: 2, date: '2023-11-05', item: 'Wireless Mouse', quantity: 5, reason: 'Stock Correction' },
  { id: 3, date: '2023-11-10', item: 'Keyboard RGB', quantity: -1, reason: 'Returned by Customer (Defective)' },
  { id: 4, date: '2023-11-15', item: 'USB Hub', quantity: 10, reason: 'New Stock Received' },
];

function StockAdjustments() {
  // Basic state and handlers can be added here if needed for future functionality e.g. opening a modal form
  // const [openAddModal, setOpenAddModal] = useState(false);

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h5" component="h1" gutterBottom sx={{ mb: 2 }}>
        Stock Adjustments
      </Typography>

      <Paper sx={{ p: 1, mb: 2, backgroundColor: 'warning.light', textAlign: 'center' }}>
        <Typography variant="caption" display="block" gutterBottom>
          Note: The data displayed and functionality on this page are based on sample data. Backend integration is pending.
        </Typography>
      </Paper>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          // onClick={() => setOpenAddModal(true)} // Example handler
        >
          Add Stock Adjustment
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="stock adjustments table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Item</TableCell>
              <TableCell align="right">Quantity Adjusted</TableCell>
              <TableCell>Reason</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockStockAdjustments.map((adj) => (
              <TableRow key={adj.id}>
                <TableCell component="th" scope="row">
                  {adj.id}
                </TableCell>
                <TableCell>{adj.date}</TableCell>
                <TableCell>{adj.item}</TableCell>
                <TableCell align="right">{adj.quantity}</TableCell>
                <TableCell>{adj.reason}</TableCell>
                <TableCell align="center">
                  <IconButton size="small" aria-label="edit" sx={{ mr: 0.5 }}>
                    <EditIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small" aria-label="delete" color="error">
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Placeholder for Add/Edit Modal/Form */}
      {/* e.g. <AddStockAdjustmentModal open={openAddModal} handleClose={() => setOpenAddModal(false)} /> */}
    </Box>
  );
}

export default StockAdjustments;