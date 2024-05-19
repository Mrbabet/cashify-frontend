import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { selectPeriodData } from "../../redux/transactions/selectors";

const ExpensesIncomeBar = () => {
  const total = useSelector(selectPeriodData);

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      w={"100%"}
      h={["85px", "85px", "50px", "50px"]}
      borderRadius={"25px"}
      bg={"white"}
    >
      <Flex
        flexDirection={["column", "column", "row", "row"]}
        gap={[0, 0, 4, 4]}
        w={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text>Expenses:</Text>
        <Text fontWeight={"600"} color={"red.500"}>
          - {total?.expenses?.expenseTotal} EUR
        </Text>
      </Flex>
      <Flex
        flexDirection={["column", "column", "row", "row"]}
        gap={[0, 0, 4, 4]}
        w={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text>Income:</Text>
        <Text fontWeight={"600"} color={"green.500"}>
          + {total?.incomes?.incomeTotal} EUR
        </Text>
      </Flex>
    </Flex>
  );
};

export default ExpensesIncomeBar;
