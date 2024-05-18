import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  Select,
  Stack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  addExpense,
  addIncome,
  getExpenseCategories,
  getExpenseStats,
  getIncomeCategories,
  getIncomeStats,
} from "../../redux/transactions/operations";
import { useDispatch, useSelector } from "react-redux";

const TransactionInputs = ({ transactionType }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) =>
    transactionType === "income"
      ? state.transactions.incomeCategories
      : state.transactions.expenseCategories
  );

  const [startDate, setStartDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  });

  const [form, setForm] = useState({
    date: startDate,
    description: "",
    category: "",
    amount: "",
  });

  useEffect(() => {
    if (transactionType === "income") {
      dispatch(getIncomeCategories());
    } else {
      dispatch(getExpenseCategories());
    }
  }, [transactionType, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { date, description, category, amount } = form;
    const formData = {
      date,
      description,
      category,
      amount: parseFloat(amount),
      transactionType: transactionType,
    };
    if (transactionType === "income") {
      dispatch(addIncome(formData)).then(() => {
        dispatch(getIncomeStats());
      });
    } else {
      dispatch(addExpense(formData)).then(() => {
        dispatch(getExpenseStats());
      });
    }
    handleClear();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleClear = () => {
    setForm({
      date: startDate,
      description: "",
      category: "",
      amount: "",
    });
  };

  return (
    <FormControl isRequired>
      <Flex
        as="form"
        onSubmit={handleSubmit}
        flexDirection={{ base: "column", md: "column" }}
        gap={3}
        p={4}
      >
        <Stack direction={{ base: "column", md: "row" }} spacing={3} flex="1">
          <Input
            name="date"
            value={form?.date}
            onChange={handleChange}
            type="date"
            required
          />
          <Input
            name="description"
            placeholder="Product description"
            value={form?.description}
            onChange={handleChange}
          />
          <Select
            name="category"
            placeholder="Product category"
            value={form?.category}
            onChange={handleChange}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </Select>
          <Input
            name="amount"
            placeholder="0.00"
            value={form.amount}
            onChange={handleChange}
            type="number"
          />
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={3}
          align="center"
          justify="center"
        >
          <Button
            w={{ base: "100%", md: "150px" }}
            h="44px"
            borderRadius="10px"
            type="submit"
            variant="outline"
            mt="32px"
            _hover={{ bg: "#FF751D", color: "white" }}
          >
            Input
          </Button>
          <Button
            w={{ base: "100%", md: "150px" }}
            h="44px"
            borderRadius="10px"
            type="button"
            variant="outline"
            mt="32px"
            onClick={handleClear}
            _hover={{ bg: "#FF751D", color: "white" }}
          >
            Clear
          </Button>
        </Stack>
      </Flex>
    </FormControl>
  );
};

export default TransactionInputs;
