import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import UserHeader from "../UserHeader/UserHeader";
import AnonymousHeader from "../AnonymousHeader/AnonymousHeader";
import { Box } from "@chakra-ui/react";



const Layout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true) 
  return (
    <>
     <Box paddingInline={'16px'} m={'16px auto'} maxWidth={'1200px'}>
    {!isAuthenticated && <AnonymousHeader/>}
     {isAuthenticated && <UserHeader />} 
     
      <main as="main">
     
        <Outlet />
       
      </main>
      </Box>
    </>
  );
};

export default Layout;
