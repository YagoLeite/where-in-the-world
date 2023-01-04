import React from "react";
import { VStack, Text, Flex } from "@chakra-ui/react";

const LeftDetail = (props) => {
  return (
    <VStack
      alignItems="left"
      justifyContent="center"
      w="100%"
      h="100%"
      fontSize="14px"
    >
      <Text fontWeight={800} fontSize="18px">
        {props.data?.name}
      </Text>
      <Flex gap={1}>
        <Text fontWeight={600}>Native Name: </Text>
        <Text fontWeight={400}>{props.data?.nativeName}</Text>
      </Flex>
      <Flex gap={1}>
        <Text fontWeight={600}>Population: </Text>
        <Text fontWeight={400}>{props.data?.population}</Text>
      </Flex>
      <Flex gap={1}>
        <Text fontWeight={600}>Region: </Text>
        <Text fontWeight={400}>{props.data?.region}</Text>
      </Flex>
      <Flex gap={1}>
        <Text fontWeight={600}>Sub Region: </Text>
        <Text fontWeight={400}>{props.data?.subregion}</Text>
      </Flex>
      <Flex gap={1}>
        <Text fontWeight={600}>Capital: </Text>
        <Text fontWeight={400}>{props.data?.capital}</Text>
      </Flex>
    </VStack>
  );
};

export default LeftDetail;
