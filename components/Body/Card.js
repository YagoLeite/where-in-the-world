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
      <Flex
        justifyContent="center"
        alignItems="center"
        w="100%"
        h="50%"
        maxH="50%"
      >
        <Image objectFit="cover" src={props.data.flag} />
      </Flex>
      <Box w="80%">
        <Text py="4%" fontWeight={600}>
          {props.data?.name}
        </Text>
        <Flex gap={1}>
          <Text fontWeight={600}>Population :</Text>
          <Text fontWeight={300}>{props.data.population}</Text>
        </Flex>
        <Flex gap={1}>
          <Text fontWeight={600}>Region: </Text>
          <Text fontWeight={300}>{props.data.region}</Text>
        </Flex>
        <Flex gap={1}>
          <Text fontWeight={600}>Capital: </Text>
          <Text fontWeight={300}>{props.data.capital}</Text>
        </Flex>
      </Box>
    </VStack>
  );
};

export default Card;
