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

    const currentDate = new Date();
    const selectedDate = new Date(date);
    if (selectedDate > currentDate) {
      console.log("Selected date cannot be in the future");
      return;
    }

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
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={{
          base: "column",
          md: "column",
          lg: "column",
          xl: "row",
        }}
        gap={3}
        p={4}
      >
        <Stack direction={{ base: "column", md: "row" }} spacing={3} flex="1">
          <Input
            h="44px"
            name="date"
            value={form?.date}
            onChange={handleChange}
            type="date"
            required
          />
          <Input
            h="44px"
            name="description"
            placeholder="Product description"
            value={form?.description}
            onChange={handleChange}
          />
          <Select
            h="44px"
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
            h="44px"
            name="amount"
            placeholder="0.00"
            value={form.amount}
            onChange={handleChange}
            type="number"
          />
        </Stack>
        <Stack
          direction={{ base: "row", md: "row" }}
          spacing={3}
          align="center"
          justify="center"
        >
          <Button
            w={{ base: "130px", md: "150px" }}
            h="44px"
            borderRadius={["20px", "20px", "10px"]}
            type="submit"
            variant="outline"
            m={0}
            _hover={{ bg: "#FF751D", color: "white" }}
          >
            Input
          </Button>
          <Button
            w={{ base: "130px", md: "150px" }}
            h="44px"
            borderRadius={["20px", "20px", "10px"]}
            type="button"
            variant="outline"
            m={0}
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
