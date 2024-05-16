import { Box, Button, Flex, FormControl, Input, Select, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Balance = () => {
  const [startDate, setStartDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });

  const [categories, setCategories] = useState([]);
  console.log(categories)
  

  
  

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NDQ3NTNmYzMzNjBlZTZlNjQwZGZlOSIsImVtYWlsIjoid2llbGljemtva2FtaWwyQGdtYWlsLmNvbSIsImlhdCI6MTcxNTg0NjgxMywiZXhwIjoxNzE1OTMzMjEzfQ.O5R2STeOSNvc1nsrl9HPLUy1FpVTouckL9ahkBsXD0I`;
        const res = await axios.get('https://cashify-backend.onrender.com/transaction/expense-categories')
        setCategories(res.data); // Set fetched categories to state
      } catch (error) {
        console.error("Error fetching expense categories", error);
      }
    };
    fetchCategories();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
  };

  const handleDateChange = (event) => {
    setStartDate(event.target.value);
  };

  return (
    <>
    <FormControl isRequired>
      <Flex
        as="form"
        onSubmit={handleSubmit}
        flexDirection={{ base: 'column', md: 'column' }}
        gap={3}
        p={4}
      >
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={3}
          flex="1"
        >
          <Input
            value={startDate}
            onChange={handleDateChange}
            type="date"
            required
          />
          <Input placeholder="Product description" />
          <Select  placeholder="Product category" > 
          {categories.map(category => (
        <option key={category} value={category}>{category}</option>
      ))}</Select>
          <Input placeholder="0.00" />
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={3}
          align="center"
          justify="center"
        >
          <Button w={{ base: '100%', md: '150px' }} type="submit">
            Input
          </Button>
          <Button w={{ base: '100%', md: '150px' }} type="button">
            Clear
          </Button>
        </Stack>
      </Flex>
    </FormControl>
   
  </>
  );
};

export default Balance;
