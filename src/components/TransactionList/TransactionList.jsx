import { Table, Thead, Tbody, Tr, Th, Td, Box, Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getIncomeStats,
  deleteTransaction,
  getExpenseStats,
} from "../../redux/transactions/operations";
import {
  selectExpenseStats,
  selectIncomeStats,
} from "../../redux/transactions/selectors";
import deleteIcon from "../../assets/deleteIcon.svg";

const TransactionList = ({ transactionType }) => {
  const incomeTransactions = useSelector(selectIncomeStats);
  const expensesTransactions = useSelector(selectExpenseStats);

  const transactions =
    transactionType === "income"
      ? incomeTransactions?.income || []
      : expensesTransactions?.expenses || [];

  const dispatch = useDispatch();

  useEffect(() => {
    if (transactionType === "income") {
      dispatch(getIncomeStats());
    } else {
      dispatch(getExpenseStats());
    }
  }, [dispatch, transactionType]);

  const handleDelete = (transactionId) => {
    dispatch(deleteTransaction(transactionId)).then(() => {
      dispatch(getExpenseStats());
      dispatch(getIncomeStats());
    });
  };

  return (
    <Box
      position="relative"
      overflowX="auto"
      width={{ base: "100%", md: "full", lg: "4/5" }}
      fontSize="xs"
    >
      <Table variant="simple" bg="gray.100" borderRadius="md">
        <Thead>
          <Tr>
            <Th px={2} py={3} textTransform="uppercase">
              Date
            </Th>
            <Th px={2} py={3} textTransform="uppercase">
              Description
            </Th>
            <Th px={2} py={3} textTransform="uppercase">
              Category
            </Th>
            <Th px={2} py={3} textTransform="uppercase">
              Sum
            </Th>
            <Th px={2} py={3} textTransform="uppercase">
              <Box as="span" className="sr-only">
                Action
              </Box>
            </Th>
          </Tr>
        </Thead>

        <Tbody
          bg="white"
          borderColor="gray.200"
          borderWidth="2px"
          color="gray.700"
        >
          {transactions.map((transaction) => (
            <Tr key={transaction?.transactionId}>
              <Td
                borderColor="gray.200"
                borderBottomWidth="2px"
                textAlign="center"
              >
                {new Date(transaction?.date).toLocaleDateString()}
              </Td>
              <Td borderColor="gray.200" borderBottomWidth="2px">
                {transaction?.description}
              </Td>
              <Td
                borderColor="gray.200"
                borderBottomWidth="2px"
                textAlign="center"
              >
                {transaction?.category}
              </Td>
              <Td
                borderColor="gray.200"
                borderBottomWidth="2px"
                textAlign="center"
                fontWeight="bold"
                color={transactionType === "income" ? "green.500" : "red.500"}
              >
                {transactionType === "income"
                  ? `+ ${transaction?.amount}   EUR`
                  : `- ${transaction?.amount}   EUR`}
              </Td>
              <Td
                borderColor="gray.200"
                borderBottomWidth="2px"
                textAlign="center"
              >
                <Button
                  onClick={() => handleDelete(transaction?.transactionId)}
                  bg="transparent"
                  _hover={{ bg: "gray.200" }}
                  rounded="full"
                  p={2}
                  transition="background-color 0.2s ease-in-out"
                >
                  <img src={deleteIcon} alt="Delete" />
                  <Box as="span" className="sr-only">
                    Delete
                  </Box>
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default TransactionList;
