import React from "react";
import TransactionInputs from "../components/TransactionInputs/TransactionInputs";
import { Link } from "react-router-dom";
import MobileNavigation from "../components/MobileNavigation/MobileNavigation";
import { useBreakpointValue } from "@chakra-ui/react";

const Income = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <>
      <Link to={"/"}>Back to main</Link>
      <TransactionInputs />
      {isMobile && <MobileNavigation />}
    </>
  );
};

export default Income;
