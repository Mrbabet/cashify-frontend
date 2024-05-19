import { Input, Text, Flex, useBreakpointValue } from "@chakra-ui/react";
import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

const BalanceReports = () => {
  const { user } = useAuth();
  const [balance, setBalance] = useState(user.balance);
  const flexDirection = useBreakpointValue({ base: "column", md: "row" });
  const inputButtonWidth = useBreakpointValue({ base: "100%", md: "auto" });

  return (
    <Flex
      gap={4}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={flexDirection}
      m={["0 auto", "unset", "unset", "0 auto"]}
    >
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={flexDirection}
        gap={4}
      >
        <Flex>
          <Text>Balance:</Text>
        </Flex>
        <Flex gap={[0, 0, 4]}>
          <Input
            disabled
            borderRadius={["20px 0 0 20px", "20px 0 0 20px", "15px"]}
            type="text"
            width={inputButtonWidth}
            value={balance}
            variant={"outline"}
            borderWidth={"2px"}
            h={"44px"}
            minW={"142px"}
            borderColor={"white"}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default BalanceReports;
