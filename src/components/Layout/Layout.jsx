import { Outlet } from "react-router-dom";
import UserHeader from "../UserHeader/UserHeader";
import { Box, Flex } from "@chakra-ui/react";
import singleCabbage from "../../assets/singleCabbage.svg";
import duoCabbage from "../../assets/twocabbages.svg";
import groupCabbage from "../../assets/cabbageGroup.svg";
import { useAuth } from "../../hooks/useAuth";

const Layout = () => {
  const isLoggedIn = useAuth();
  return (
    <>
      <Box paddingInline={["20px", "32px"]}>
        <UserHeader />
      </Box>
      <Box as="main">
        {!isLoggedIn ? (
          <Box
            bgImage={[singleCabbage, duoCabbage]}
            bgRepeat={"no-repeat"}
            bgPosition={["bottom", "bottom 20px left 100px", "bottom left"]}
            position={"relative"}
            zIndex={"9"}
          >
            <Box
              bg={"#F5F6FB"}
              position={"absolute"}
              w={"100vw"}
              h={["288px", "526px"]}
              borderRadius={"0 0 0px 120px"}
              zIndex={"-1"}
              bgImage={[singleCabbage, groupCabbage]}
              bgRepeat={"no-repeat"}
              bgPosition={["right center", "top 20px center"]}
            ></Box>
            <Outlet />
          </Box>
        ) : (
          <>
            <Box
              bg={"#F5F6FB"}
              position={"absolute"}
              w={"100vw"}
              h={["288px", "526px"]}
              borderRadius={"0 0 0px 120px"}
              zIndex={"-1"}
              bgImage={[singleCabbage, groupCabbage]}
              bgRepeat={"no-repeat"}
              bgPosition={["right center", "top 20px center"]}
            ></Box>
            <Outlet />
          </>
        )}
      </Box>
    </>
  );
};

export default Layout;
