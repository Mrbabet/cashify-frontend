import { Box, Button, Flex, Image, useBreakpointValue } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

const MobileNavigation = () => {
  return (
    <Flex
      as="nav"
      position="fixed"
      bottom={0}
      left={0}
      w={"100%"}
      bg="#fafbfd"
      p={4}
      justifyContent="space-around"
    >
      <ChakraLink
        as={ReactRouterLink}
        to={"/income"}
        fontSize="lg"
        color="black"
      >
        Income
      </ChakraLink>

      <ChakraLink
        as={ReactRouterLink}
        to={"/expense"}
        fontSize="lg"
        color="black"
      >
        Expense
      </ChakraLink>
    </Flex>
  );
};

export default MobileNavigation;
