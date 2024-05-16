import React from "react";
import kapustaLogo from "../../assets/logo.svg";
import { Avatar, Box, Flex, Image } from "@chakra-ui/react";



const UserHeader = () => {

  return (
    <Flex as="header">
      <Image src={kapustaLogo} alt="Kapusta logo"  mr='auto'/>
      <Avatar size='sm' marginInline='8px' bg='gray' name="test"/>
      <button >Exit</button>
    </Flex>
  );
};

export default UserHeader;
