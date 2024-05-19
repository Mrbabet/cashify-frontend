import { useState } from "react";
import { Box, Flex, Text, Icon as ChakraIcon } from "@chakra-ui/react";

const CategoryCard = ({
  amount,
  Icon,
  category1,
  category2,
  isActive,
  onClick,
}) => {
  return (
    <Flex direction="column" align="center" p={2} onClick={onClick}>
      <Text fontSize="xs" color="gray.700">
        {amount}
      </Text>
      <Flex
        align="center"
        justify="center"
        w={16}
        h={16}
        my={2}
        position="relative"
        cursor="pointer"
      >
        <Flex position="absolute" inset={0} align="center" justify="center">
          <ChakraIcon as={Icon} color={isActive ? "orange.400" : "gray.700"} />
        </Flex>
        <Box
          h={12}
          w={14}
          rounded="3xl"
          bg={isActive ? "orange.100" : "gray.100"}
        />
      </Flex>
      <Flex direction="column" align="center">
        <Text fontSize="xs" textTransform="uppercase" color="gray.700">
          {category1}
        </Text>
        <Text fontSize="xs" textTransform="uppercase" color="gray.700">
          {category2}
        </Text>
      </Flex>
    </Flex>
  );
};

export default CategoryCard;
