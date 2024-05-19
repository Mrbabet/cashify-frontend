import React from "react";
import TransactionInputs from "../TransactionInputs/TransactionInputs";

import { Flex, useBreakpointValue } from "@chakra-ui/react";
import TransactionList from "../TransactionList/TransactionList";
import MonthSummary from "../MonthSummary/MonthSummary";

const Income = ({ transactionType }) => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const flexDirection = useBreakpointValue({ lg: "column", xl: "row" });
  return (
    <>
      <TransactionInputs transactionType={transactionType} />
      <Flex flexDirection={flexDirection} gap={"75px"}>
        <TransactionList transactionType={transactionType} />
        {isDesktop && <MonthSummary transactionType={transactionType} />}
      </Flex>
    </>
  );
};

export default Income;
