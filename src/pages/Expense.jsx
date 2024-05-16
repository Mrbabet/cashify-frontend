import React from "react";
import { Link } from "react-router-dom";
import TransactionInputs from "../components/TransactionInputs/TransactionInputs";
import MobileNavigation from "../components/MobileNavigation/MobileNavigation";
import { useBreakpointValue } from "@chakra-ui/react";

const Expense = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <>
      <TransactionInputs />
      {isMobile && <MobileNavigation />}
    </>
  );
};

export default Expense;
