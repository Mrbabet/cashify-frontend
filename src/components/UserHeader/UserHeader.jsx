import React from "react";
import kapustaLogo from "../../assets/logo.svg";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import logout from "../../assets/logout 1.svg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../redux/auth/operations";
import { useAuth } from "../../hooks/useAuth";

const UserHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoggedIn } = useAuth();

  const handleLogOut = async () => {
    try {
      dispatch(logoutUser());
      navigate("/welcome");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const isWideScreen = useBreakpointValue({ base: false, md: true });
  return (
    <>
      {!isLoggedIn ? (
        <Flex h="56px" alignItems={"center"} as="header">
          <Image src={kapustaLogo} alt="Kapusta logo" mr="auto" />
        </Flex>
      ) : (
        <Flex h="56px" alignItems={"center"} as="header">
          <Image src={kapustaLogo} alt="Kapusta logo" mr="auto" />
          <Avatar name={user.email} size="sm" marginInline="8px" bg="gray" />
          {isWideScreen && <Text>{user.email}</Text>}

          <Button onClick={handleLogOut} bg={"transparent"}>
            {isWideScreen ? "Exit" : <Image src={logout} alt="Logout icon" />}
          </Button>
        </Flex>
      )}
    </>
  );
};

export default UserHeader;
