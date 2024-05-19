import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useBreakpointValue,
} from "@chakra-ui/react";
import { getMonthIndex } from "../../helpers/getMonthIndex";
import {
  selectExpenseStats,
  selectIncomeStats,
} from "../../redux/transactions/selectors";
import {
  getExpenseStats,
  getIncomeStats,
} from "../../redux/transactions/operations";

const MonthSummary = ({ transactionType }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (transactionType === "income") {
      dispatch(getIncomeStats());
    } else {
      dispatch(getExpenseStats());
    }
  }, [dispatch, transactionType]);

  const monthlyTransactions =
    transactionType === "expense"
      ? useSelector(selectExpenseStats)
      : useSelector(selectIncomeStats);

  const currentMonthIndex = new Date().getMonth() + 1;
  const monthsData = Object.entries(monthlyTransactions?.monthStats || {})
    .filter(([month]) => {
      const monthIndex = getMonthIndex(month);
      return monthIndex <= currentMonthIndex;
    })
    .map(([month, value]) => ({
      month,
      value: value === "N/A" ? 0 : value,
    }));
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      {!isMobile && (
        <Table
          variant="unstyled"
          bg="gray.200"
          borderRadius="xl"
          h={"213px"}
          w={"300px"}
        >
          <Thead>
            <Tr borderBottom="4px" borderBottomColor="white">
              <Th colSpan="2" py={3}>
                Summary
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {monthsData?.map(({ month, value }) => (
              <Tr
                key={month}
                className="text-gray-darkest uppercase"
                borderBottom="2px"
                borderBottomColor="white"
              >
                <Td px={4} py={3}>
                  {month}
                </Td>
                <Td px={4} py={3} textAlign="right">
                  {value} EUR
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </>
  );
};

export default MonthSummary;
