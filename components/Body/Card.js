import { Box, VStack, Text, Image } from "@chakra-ui/react";
import React from "react";

const Card = (props) => {
  return (
    <VStack h="80%" w="80%" _hover={{ w: "90%", h: "90%" }} boxShadow="dark-lg">
      <Box w="100%" h="50%">
        <Image w="100%" h="100%" src={props.data.flag} />
      </Box>
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
