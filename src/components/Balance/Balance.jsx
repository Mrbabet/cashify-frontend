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
import { updateUserBalance } from "../../redux/transactions/operations";

const Balance = () => {
  const { user } = useAuth();
  const [balance, setBalance] = useState(user.balance);
  const dispatch = useDispatch();
  const flexDirection = useBreakpointValue({ base: "column", md: "row" });
  const inputButtonWidth = useBreakpointValue({ base: "100%", md: "auto" });
  const isWideScreen = useBreakpointValue({ base: false, md: true });

  const handleChange = (e) => {
    setBalance(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserBalance(Number(balance)));
  };

  return (
    <Flex
      gap={4}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={flexDirection}
      m={["0 auto", "unset"]}
    >
      <Flex
        onSubmit={handleSubmit}
        justifyContent={"center"}
        alignItems={"center"}
        as={"form"}
        flexDirection={flexDirection}
        gap={4}
      >
        <Flex>
          <Text>Balance:</Text>
        </Flex>
        <Flex gap={[0, 0, 4]}>
          <Input
            borderRadius={["20px 0 0 20px", "20px 0 0 20px", "15px"]}
            type="text"
            width={inputButtonWidth}
            value={balance}
            onChange={handleChange}
            variant={"outline"}
            borderWidth={"2px"}
            h={"44px"}
            minW={"142px"}
            borderColor={"white"}
          />
          <Button
            borderRadius={["0 20px 20px 0", "0 20px 20px 0", "15px"]}
            width={inputButtonWidth}
            borderWidth={"2px"}
            variant={"outline"}
            h={"44px"}
            minW={"142px"}
            _hover={{ bg: "#FF751D", color: "white" }}
            borderColor={"white"}
            textTransform={"uppercase"}
            type="submit"
          >
            Confirm
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Balance;
