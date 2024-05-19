import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Image,
  useBreakpointValue,
  Flex,
  Grid,
  Text,
} from "@chakra-ui/react";
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
  const isMobile = useBreakpointValue({ base: true, md: false });

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
      {isMobile ? (
        <Box maxHeight="200px" overflowY="scroll">
          {transactions?.map((transaction) => (
            <Flex
              key={transaction?.transactionId}
              bg="white"
              borderBottom={"1px solid gray"}
              mb={2}
              pb={"8px"}
              alignItems="center"
              justifyContent="space-between"
            >
              <Flex flexBasis="40%" flexDirection={"column"}>
                <Text>
                  {" "}
                  {new Date(transaction?.date).toLocaleDateString()}{" "}
                </Text>
                <Text>{transaction?.description}</Text>
                <Text>{transaction?.category}</Text>
              </Flex>
              <Box flexBasis="40%">
                <Text
                  fontWeight="bold"
                  color={transactionType === "income" ? "green.500" : "red.500"}
                >
                  {transactionType === "income"
                    ? `+ ${transaction?.amount} EUR`
                    : `- ${transaction?.amount} EUR`}
                </Text>
              </Box>
              <Box flexBasis="20%">
                <Flex alignItems="center">
                  <Button
                    onClick={() => handleDelete(transaction?.transactionId)}
                    bg="transparent"
                    _hover={{ bg: "gray.200" }}
                    rounded="full"
                    p={2}
                    ml={2}
                    transition="background-color 0.2s ease-in-out"
                  >
                    <Image src={deleteIcon} alt="Delete" />
                  </Button>
                </Flex>
              </Box>
            </Flex>
          ))}
        </Box>
      ) : (
        <Box maxHeight={"444px"} overflowY="scroll">
          <Table
            overflow={"hidden"}
            variant="simple"
            bg="gray.100"
            borderRadius="md"
          >
            <Thead>
              <Tr>
                <Th
                  textAlign={"center"}
                  px={2}
                  py={3}
                  textTransform="uppercase"
                >
                  Date
                </Th>
                <Th
                  textAlign={"center"}
                  px={2}
                  py={3}
                  textTransform="uppercase"
                >
                  Description
                </Th>
                <Th
                  textAlign={"center"}
                  px={2}
                  py={3}
                  textTransform="uppercase"
                >
                  Sum
                </Th>
                <Th
                  textAlign={"center"}
                  px={2}
                  py={3}
                  textTransform="uppercase"
                >
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
              {transactions?.map((transaction) => (
                <Tr key={transaction?.transactionId}>
                  <Td
                    borderColor="gray.200"
                    borderBottomWidth="2px"
                    textAlign="center"
                  >
                    {new Date(transaction?.date).toLocaleDateString()}
                  </Td>
                  <Td
                    textAlign={"center"}
                    borderColor="gray.200"
                    borderBottomWidth="2px"
                  >
                    {transaction?.description}
                  </Td>
                  <Td
                    borderColor="gray.200"
                    borderBottomWidth="2px"
                    textAlign="center"
                    fontWeight="bold"
                    color={
                      transactionType === "income" ? "green.500" : "red.500"
                    }
                  >
                    {transactionType === "income"
                      ? `+ ${transaction?.amount} EUR`
                      : `- ${transaction?.amount} EUR`}
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
                      <Image src={deleteIcon} alt="Delete" />
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      )}
    </Box>
  );
};

export default TransactionList;
