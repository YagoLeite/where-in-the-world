import { Flex, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Header from "../../components/Header/Header";
import Wrapper from "./Wrapper";

export default function index() {
  const bg = useColorModeValue("hsl(0, 0%, 98%)", "gray.800");
  return (
    <Flex
      direction="column"
      h="100%"
      minH="100vh"
      w="100%"
      justify="top"
      bg={bg}
      align="center"
    >
      <Flex
        direction="column"
        w="100%"
        py={["10px", "15px", "20px"]}
        px={["15px", "15px", "20px"]}
        maxW="1900px"
        gap={["10px", "15px", "30px"]}
      >
        <Header />
        <Wrapper />
      </Flex>
    </Flex>
  );
}
