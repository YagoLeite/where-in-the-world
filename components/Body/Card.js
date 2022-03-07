import { Box, VStack, Text, Image, Flex } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";

const Card = (props) => {
  const router = useRouter();

  return (
    <VStack
      className="test"
      h="80%"
      w="80%"
      _hover={{ w: "90%", h: "90%" }}
      boxShadow="lg"
      onClick={() => router.push(props.data.name)}
      cursor="pointer"
      maxW="400px"
    >
      <Flex justifyContent="center" alignItems="center" w="100%" h="50%">
        <Image w="100%" h="100%" src={props.data.flag} />
      </Flex>
      <Box w="80%">
        <Text pb="4%">{props.data?.name}</Text>
        <Text>Population : {props.data.population}</Text>
        <Text>Region: {props.data.region}</Text>
        <Text>Capital: {props.data.capital} </Text>
      </Box>
    </VStack>
  );
};

export default Card;
