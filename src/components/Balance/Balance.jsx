import {
  Input,
  Text,
  Box,
  Button,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";

const Balance = () => {
  const flexDirection = useBreakpointValue({ base: "column", md: "row" });
  const inputButtonWidth = useBreakpointValue({ base: "100%", md: "auto" });

  return (
    <Flex
      gap={4}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={flexDirection}
    >
      <Text>Balance:</Text>
      <Flex as={"form"} flexDirection={"row"} gap={4} width="100%">
        <Input type="text" width={inputButtonWidth} />
        <Button width={inputButtonWidth}>Confirm</Button>
      </Flex>
    </Flex>
  );
};

export default Balance;
