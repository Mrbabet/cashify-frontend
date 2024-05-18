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
  FormLabel,
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
    <>
      <Flex
        flexDirection={flexDirection}
        alignItems={["left", "left", "left", "center"]}
        justifyContent={["left", "center", "center"]}
        gap={["50px", "79px", "79px", "150px"]}
        margin={"0 auto"}
        pt={"80px"}
        maxW={["280px", "426px", "426px", "none"]}
      >
        <Image marginRight={("auto", "none")} w={logoSize} src={logo} />
        <Box
          maxW={"426px"}
          paddingBlock={["40px", "56px"]}
          paddingInline={["20px", "84px"]}
          borderRadius={"20px"}
          boxShadow="0 10px 60px rgba(170, 178, 197, 0.6)"
          zIndex={"11"}
          bg={"white"}
        >
          <Box maxW={["none", "259px"]} textAlign="center">
            <Text fontSize={"12px"} marginBottom={["16px", "20px"]}>
              You can log in with your Google Account:
            </Text>
            <Button
              h={"40px"}
              m={"0 auto"}
              mb={4}
              borderRadius={"20px"}
              w={"122px"}
            >
              <Image src={googleLogo} />
            </Button>
            <Text
              textAlign={"left"}
              fontSize={"12px"}
              marginBottom={["16px", "20px"]}
            >
              Or log in using an email and password, after registering:
            </Text>
            <Box as="form" onSubmit={(e) => e.preventDefault()}>
              <FormLabel mb={"20px"} fontSize={"12px"}>
                Email:
                <Input
                  mt={"12px"}
                  placeholder="Email"
                  type="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  borderRadius={"26px"}
                  bg={"#F6F7FB"}
                  h={"52px"}
                  w={"100%"}
                  border={"none"}
                />
              </FormLabel>
              <FormLabel mb={"40px"} fontSize={"12px"}>
                Password:
                <Input
                  mt={"12px"}
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  borderRadius={"26px"}
                  bg={"#F6F7FB"}
                  h={"52px"}
                  w={"100%"}
                  border={"none"}
                />
              </FormLabel>
              <Flex gap={4} justifyContent={"center"}>
                <Button
                  w={"112px"}
                  maxWidth={"140px"}
                  h={"48px"}
                  borderRadius={"15px"}
                  fontSize={"12px"}
                  _hover={{ bg: "#FF751D", color: "white" }}
                  onClick={(e) => handleSubmit(e, "login")}
                >
                  LOG IN
                </Button>
                <Button
                  w={"112px"}
                  maxWidth={"140px"}
                  h={"48px"}
                  fontSize={"12px"}
                  borderRadius={"15px"}
                  _hover={{ bg: "#FF751D", color: "white" }}
                  onClick={(e) => handleSubmit(e, "register")}
                >
                  REGISTRATION
                </Button>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default AuthenticationPage;
