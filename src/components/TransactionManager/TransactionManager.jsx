import React, { useState } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useBreakpointValue,
} from "@chakra-ui/react";

import Expense from "../Expense/Expense";
import Income from "../Income/Income";
import {
  getExpenseStats,
  getIncomeStats,
} from "../../redux/transactions/operations";
import { useDispatch } from "react-redux";

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
            padding={"24px 40px 40px 40px"}
            borderRadius={"0 20px 20px 20px"}
            bg={"white"}
            border={"none"}
          >
            <TabPanel p={0}>{<Expense transactionType={"expense"} />}</TabPanel>
            <TabPanel p={0}>{<Income transactionType={"income"} />}</TabPanel>
          </TabPanels>
        </Tabs>
      )}
    </>
  );
};

export default TransactionManager;
