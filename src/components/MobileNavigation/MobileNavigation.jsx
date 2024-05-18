import { Button, Flex } from "@chakra-ui/react";

const MobileNavigation = ({ activeTab, setActiveTab }) => {
  return (
    <Flex
      as="nav"
      position="fixed"
      bottom={0}
      left={0}
      w={"100%"}
      h={"53px"}
      bg="#fafbfd"
      justifyContent="space-around"
    >
      <Flex w={"100%"} h={"100%"}>
        <Button
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          fontSize="lg"
          color={activeTab === "income" ? "white" : "black"}
          bg={activeTab === "income" ? "#FF751D" : "transparent"}
          textDecoration={"none"}
          w={"100%"}
          h={"53px"}
          onClick={() => setActiveTab("income")}
        >
          Income
        </Button>
      </Flex>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        w={"100%"}
        h={"100%"}
      >
        <Button
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          fontSize="lg"
          color={activeTab === "expense" ? "white" : "black"}
          bg={activeTab === "expense" ? "#FF751D" : "transparent"}
          textDecoration={"none"}
          w={"100%"}
          h={"100%"}
          onClick={() => setActiveTab("expense")}
        >
          Expense
        </Button>
      </Flex>
    </Flex>
  );
};

export default MobileNavigation;
