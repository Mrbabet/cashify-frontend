import React from "react";
import kapustaLogo from "../../assets/logo.svg";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import logout from "../../assets/logout 1.svg";

const UserHeader = () => {
  const isWideScreen = useBreakpointValue({ base: false, md: true });
  return (
    <Flex alignItems={"center"} as="header">
      <Image src={kapustaLogo} alt="Kapusta logo" mr="auto" />
      <Avatar size="sm" marginInline="8px" bg="gray" name="test" />
      {isWideScreen ? (
        <Button bg={"transparent"}>Exit</Button>
      ) : (
        <Button bg={"transparent"}>
          <Image src={logout} alt="Logout icon" />
        </Button>
      )}
    </Flex>
  );
};

export default UserHeader;
