import {
  Input,
  Text,
  Box,
  Button,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useDispatch } from "react-redux";

const Balance = () => {
  const { user } = useAuth();
  const [balance, setBalance] = useState(user.balance);
  console.log(balance);
  const dispatch = useDispatch();
  const flexDirection = useBreakpointValue({ base: "column", md: "row" });
  const inputButtonWidth = useBreakpointValue({ base: "100%", md: "auto" });
  const isWideScreen = useBreakpointValue({ base: false, md: true });

  const handleChange = (e) => {
    setBalance(e.target.value);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(updateUserBalance(balance));
  // };

  return (
    <Flex
      gap={4}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={flexDirection}
      m={["0 auto", "unset"]}
    >
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        as={"form"}
        flexDirection={flexDirection}
        gap={4}
      >
        <Flex>
          <Text>Balance:</Text>
        </Flex>
        <Flex>
          <Input
            borderRadius={["0 20px 20px 0", "0 "]}
            type="text"
            width={inputButtonWidth}
            value={balance}
            onChange={handleChange}
            variant={"outline"}
            borderWidth={"2px"}
          />
          <Button
            borderRadius={["0 20px 20px 0", "0 "]}
            width={inputButtonWidth}
            borderWidth={"2px"}
            variant={"outline"}
          >
            Confirm
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Balance;
