import React, { useState } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useBreakpointValue,
  Box,
  Button,
  Flex,
} from "@chakra-ui/react";

import Expense from "../Expense/Expense";
import Income from "../Income/Income";
import {
  getExpenseStats,
  getIncomeStats,
} from "../../redux/transactions/operations";
import { useDispatch } from "react-redux";
import MonthSummary from "../MonthSummary/MonthSummary";

const TransactionManager = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [selectedTab, setSelectedTab] = useState(0);

  const dispatch = useDispatch();

  const handleTabChange = (index) => {
    setSelectedTab(index);
    if (index === 0) {
      // Get expenses
      dispatch(getExpenseStats());
    } else {
      // Get income
      dispatch(getIncomeStats());
    }
  };

  return (
    <>
      {!isMobile && (
        <Tabs
          mt={10}
          variant="unstyled"
          index={selectedTab}
          onChange={handleTabChange}
        >
          <TabList>
            <Tab
              _selected={{ bg: "#FF751D", color: "white" }}
              borderRadius={"10px 10px 0 0 "}
              bg={"white"}
            >
              Expenses
            </Tab>
            <Tab
              _selected={{ bg: "#FF751D", color: "white" }}
              borderRadius={"10px 10px 0 0 "}
              bg={"white"}
            >
              Income
            </Tab>
          </TabList>
          <TabPanels
            boxShadow={"0px 4px 6px rgba(0, 0, 0, 0.1)"}
            padding={"24px 32px 32px 32px"}
            borderRadius={"0 20px 20px 20px"}
            bg={"white"}
          >
            <TabPanel p={0}>{<Expense transactionType={"expense"} />}</TabPanel>
            <TabPanel p={0}>{<Income transactionType={"income"} />}</TabPanel>
          </TabPanels>
        </Tabs>
      )}

      {isMobile && (
        <>
          <Box>
            <Tabs isFitted variant="enclosed">
              <TabPanels>
                <TabPanel p={0}>
                  {<Expense transactionType={"expense"} />}
                </TabPanel>
                <TabPanel p={0}>
                  {<Income transactionType={"income"} />}
                </TabPanel>
              </TabPanels>
              <TabList borderTop="1px solid #ccc">
                <Flex
                  justifyContent="space-between"
                  position="fixed"
                  bottom="0"
                  left="0"
                  right="0"
                  bg="white"
                  boxShadow="0 -2px 5px rgba(0, 0, 0, 0.1)"
                  h={"53px"}
                >
                  <Tab
                    _selected={{ bg: "#FF751D", color: "white" }}
                    onClick={() => handleTabChange(0)}
                  >
                    Expense
                  </Tab>
                  <Tab
                    w={"100%"}
                    h={"100%"}
                    _selected={{ bg: "#FF751D", color: "white" }}
                    onClick={() => handleTabChange(1)}
                  >
                    Income
                  </Tab>
                </Flex>
              </TabList>
            </Tabs>
          </Box>
        </>
      )}
    </>
  );
};

export default TransactionManager;
