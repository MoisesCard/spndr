import React from 'react'
import { Container, Box, Typography, TextField, Button } from '@mui/material';

const Body = () => {
  const [spendingList, setSpendingList] = React.useState([]);

  const handleAddSpending = () => {
    setSpendingList([...spendingList, { id: spendingList.length, item: '', amount: 0 }]);
  };

  const handleItemChange = (event, id) => {
    const updatedSpendingList = spendingList.map((item) => {
      if (item.id === id) {
        return { ...item, item: event.target.value };
      }
      return item;
    });
    setSpendingList(updatedSpendingList);
  };

  const handleAmountChange = (event, id) => {
    const updatedSpendingList = spendingList.map((item) => {
      if (item.id === id) {
        return { ...item, amount: event.target.value };
      }
      return item;
    });
    setSpendingList(updatedSpendingList);
  };

  const totalAmount = spendingList.reduce((total, item) => total + Number(item.amount), 0);

  return (
    <Container maxWidth="lg">
    <Typography variant="h2" fontWeight={600} color='white' align="center">
    Total: ${totalAmount.toFixed(2)}
    </Typography>
    <Box border={3} borderColor="white" borderRadius={4} p={4} mt={2}>
        {spendingList.map((item) => (
          <Box key={item.id} p={1}>
            <TextField
              color='blanco'
              
              label="Item"
              value={item.item}
              onChange={(event) => handleItemChange(event, item.id)}
            />
            <TextField
              color='blanco'
              label="Amount"
              type="number"
              value={item.amount}
              onChange={(event) => handleAmountChange(event, item.id)}
            />
          </Box>
        ))}
         <Box mt={2} display="flex" justifyContent="center">
          <Button variant="contained" color="verde" onClick={handleAddSpending}>
            Add spending
          </Button>
        </Box>
      </Box>
  </Container>
  )
}

export default Body