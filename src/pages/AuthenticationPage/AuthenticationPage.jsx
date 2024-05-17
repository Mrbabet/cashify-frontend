import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser, createUser } from "../../redux/auth/operations";
import logo from "../../assets/auth-logo-mobile.svg";
import googleLogo from "../../assets/google-logo.svg";
import {
  Image,
  useBreakpointValue,
  Flex,
  Box,
  Text,
  Button,
  Input,
} from "@chakra-ui/react";

const AuthenticationPage = () => {
  const dispatch = useDispatch();

  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e, action) => {
    e.preventDefault();

    if (action === "login") {
      dispatch(loginUser({ email: userEmail, password: password }));
    } else if (action === "register") {
      dispatch(createUser({ email: userEmail, password: password }));
    }

    setUserEmail("");
    setPassword("");
  };

  const logoSize = useBreakpointValue({
    base: "186px",
    md: "306px",
    lg: "377px",
  });
  const flexDirection = useBreakpointValue({
    base: "column",
    md: "column",
    lg: "row",
  });

  return (
    <Flex
      flexDirection={flexDirection}
      alignItems="center"
      justifyContent="center"
    >
      <Image w={logoSize} src={logo} />
      <Box w={"280px"} textAlign="center">
        <Text marginBottom={["16px", "20px"]}>
          You can log in with your Google Account:
        </Text>
        <Button m={"0 auto"} mb={4}>
          <Image src={googleLogo} />
        </Button>
        <Text marginBottom={["16px", "20px"]}>
          Or log in using an email and password, after registering:
        </Text>
        <Box as="form" onSubmit={(e) => e.preventDefault()}>
          <Input
            placeholder="Email"
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            marginBottom={4}
          />
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            marginBottom={4}
          />
          <Flex gap={4} justifyContent={"center"}>
            <Button onClick={(e) => handleSubmit(e, "login")}>Log In</Button>
            <Button onClick={(e) => handleSubmit(e, "register")}>
              Register
            </Button>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default AuthenticationPage;
