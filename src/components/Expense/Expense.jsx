import React from "react";
import TransactionInputs from "../TransactionInputs/TransactionInputs";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
import { useBreakpointValue } from "@chakra-ui/react";
import TransactionList from "../TransactionList/TransactionList";

const Expense = ({ transactionType }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <>
      <TransactionInputs transactionType={transactionType} />
      <TransactionList transactionType={transactionType} />
      {isMobile && <MobileNavigation />}
    </>
  );
};

export default Expense;
