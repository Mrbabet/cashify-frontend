import {
  Box,
  Button,
  Flex,
  Image,
  useBreakpointValue,
  Input,
} from "@chakra-ui/react";
import Balance from "../components/Balance/Balance";

import { useEffect, useState } from "react";
import TransactionManager from "../components/TransactionManager/TransactionManager";
import reportsIcon from "../assets/bar_chart-24px 1.svg";
import { Link } from "react-router-dom";

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
  const marginBottom = useBreakpointValue({
    base: "32px",
    md: "none",
  });

  return (
    <>
      <Box
        m={"0 auto"}
        maxW={["100%", "100%", "768px", "992px", "1280px"]}
        paddingInline={["20px", "32px", "90px"]}
      >
        <Flex
          pt={["20px", "32px"]}
          justifyContent={["unset", "space-between"]}
          flexDirection={flexDirection}
        >
          <Link to={"/reports"}>
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              gap={"8px"}
              marginBottom={marginBottom}
            >
              Reports
              <Image src={reportsIcon} />
            </Flex>
          </Link>

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
      </Box>
    </>
  );
};

export default Home;
