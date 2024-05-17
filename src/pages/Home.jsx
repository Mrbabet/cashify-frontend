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

const Home = () => {
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
      <Box marginBlock={"32px"}>
        <Flex flexDirection={flexDirection}>
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

        {isMobile && <MobileNavigation />}
      </Box>
    </>
  );
};

export default Home;
