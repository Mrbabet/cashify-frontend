import React from "react";
import kapustaLogo from "../../assets/logo.svg";
import { Avatar, Box, Flex, Image } from "@chakra-ui/react";



const AnonymousHeader = () => {

  return (
    <Flex m='16px'paddingInline='16px' as="header">
      <Image src={kapustaLogo} alt="Kapusta logo"  mr='auto'/>
      
    </Flex>
  );
};

export default AnonymousHeader;
