import {
  Box,
  Button,
  Flex,
  Image,
  useBreakpointValue,
  Input,
} from "@chakra-ui/react";
import Balance from "../components/Balance/Balance";
import Reports from "../components/Reports/Reports";

import MobileNavigation from "../components/MobileNavigation/MobileNavigation";
import { useEffect, useState } from "react";

import TransactionManager from "../components/TransactionManager/TransactionManager";

const Home = () => {
  const [activeTab, setActiveTab] = useState("expense");
  console.log(activeTab);
  const [startDate, setStartDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  });

  const handleDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const flexDirection = useBreakpointValue({
    base: "column",
    md: "row-reverse",
  });

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <Box paddingInline={["20px", "32px"]}>
        <Flex
          pt={["20px", "32px"]}
          justifyContent={["unset", "space-between"]}
          flexDirection={flexDirection}
        >
          {isMobile && <Flex>TO TRANSACTIONS</Flex>}
          <Reports />
          <Balance />

          {isMobile && (
            <Flex justifyContent={"center"}>
              <Input
                value={startDate}
                onChange={handleDateChange}
                type="date"
                mt={4}
                variant={"unstyled"}
                w={"110px"}
              />
            </Flex>
          )}
        </Flex>
        <TransactionManager />
        {isMobile && (
          <MobileNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        )}
      </Box>
    </>
  );
};

export default Home;
