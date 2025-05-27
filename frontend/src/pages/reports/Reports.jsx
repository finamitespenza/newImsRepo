import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Typography,
  Paper,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';

// Mock Data
const mockPurchaseData = [
  { id: 1, date: '2023-10-01', supplier: 'Supplier A', amount: 1000 },
  { id: 2, date: '2023-10-05', supplier: 'Supplier B', amount: 1500 },
];

const mockSalesData = [
  { id: 1, date: '2023-10-02', customer: 'Customer X', amount: 500 },
  { id: 2, date: '2023-10-06', customer: 'Customer Y', amount: 750 },
];

const mockPurchaseReturnData = [
  { id: 1, date: '2023-10-03', supplier: 'Supplier A', amount: 200 },
];

const mockSalesReturnData = [
  { id: 1, date: '2023-10-07', customer: 'Customer X', amount: 100 },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function Reports() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h5" component="h1" gutterBottom sx={{ mb: 2 }}>
        Reports
      </Typography>
      <Paper sx={{ p: 1, mb: 2, backgroundColor: 'warning.light', textAlign: 'center' }}>
        <Typography variant="caption" display="block" gutterBottom>
          Note: The data displayed in these reports is sample data for demonstration purposes only. Backend integration is pending.
        </Typography>
      </Paper>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="report types">
          <Tab label="Purchase" />
          <Tab label="Sales" />
          <Tab label="Purchase Return" />
          <Tab label="Sales Return" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Typography variant="h6" gutterBottom>Purchase Report</Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="purchase report table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Supplier</TableCell>
                <TableCell align="right">Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mockPurchaseData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">{row.id}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.supplier}</TableCell>
                  <TableCell align="right">${row.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography variant="h6" gutterBottom>Sales Report</Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="sales report table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Customer</TableCell>
                <TableCell align="right">Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mockSalesData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">{row.id}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.customer}</TableCell>
                  <TableCell align="right">${row.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography variant="h6" gutterBottom>Purchase Return Report</Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="purchase return report table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Supplier</TableCell>
                <TableCell align="right">Amount Returned</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mockPurchaseReturnData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">{row.id}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.supplier}</TableCell>
                  <TableCell align="right">${row.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Typography variant="h6" gutterBottom>Sales Return Report</Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="sales return report table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Customer</TableCell>
                <TableCell align="right">Amount Returned</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mockSalesReturnData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">{row.id}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.customer}</TableCell>
                  <TableCell align="right">${row.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>
    </Box>
  );
}

export default Reports;