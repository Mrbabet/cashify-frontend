import { Outlet } from "react-router-dom";
import UserHeader from "../UserHeader/UserHeader";
import AnonymousHeader from "../AnonymousHeader/AnonymousHeader";
import { Box } from "@chakra-ui/react";
import { useAuth } from "../../hooks/useAuth";

const Layout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <Box paddingInline={"16px"} m={"16px auto"} maxWidth={"1200px"}>
        {!isLoggedIn && <AnonymousHeader />}
        {isLoggedIn && <UserHeader />}
        <main as="main">
          <Outlet />
        </main>
      </Box>
    </>
  );
};

export default Layout;
