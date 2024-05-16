import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Balance from "../components/Balance/Balance";
import { Box } from "@chakra-ui/react";



const Home = () => {

  
  return (
    <>
      <Box marginBlock={'32px'}>
      <Balance/>
      <Link to={"/reports"}>Reports</Link>
      </Box>
      
    </>
  );
};

export default Home;
