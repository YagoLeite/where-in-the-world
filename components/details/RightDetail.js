import React from "react";
import { VStack, Flex, Text } from "@chakra-ui/react";

const RightDetail = (props) => {
  return (
    <VStack
      alignItems="left"
      justifyContent="center"
      w="100%"
      h="100%"
      fontSize="14px"
    >
      <Flex gap={1}>
        <Text fontWeight={600}>Top Level Domain:</Text>
        {props.data?.topLevelDomain ? (
          props.data?.topLevelDomain.map((a, index) => {
            if (index === props.data?.topLevelDomain.length - 1) {
              return (
                <Text fontWeight={300} key={index}>
                  {a}
                </Text>
              );
            } else {
              return (
                <Text fontWeight={300} key={index}>
                  {a},
                </Text>
              );
            }
          })
        ) : (
          <Text>No Top Level Domain found.</Text>
        )}
      </Flex>
      <Flex gap={1}>
        <Text fontWeight={600}>Currencies:</Text>
        {props.data?.currencies ? (
          props.data?.currencies.map((a, index) => {
            if (index === props.data?.currencies.length - 1) {
              return (
                <Text fontWeight={300} key={index}>
                  {a.code}
                </Text>
              );
            } else {
              return (
                <Text fontWeight={300} key={index}>
                  {a.code},
                </Text>
              );
            }
          })
        ) : (
          <Text>No currencies found.</Text>
        )}
      </Flex>
      <Flex gap={1}>
        <Text fontWeight={600}>Languages:</Text>
        {props.data?.languages ? (
          props.data?.languages.map((a, index) => {
            if (index === props.data?.languages.length - 1) {
              return (
                <Text fontWeight={300} key={index}>
                  {a.name}
                </Text>
              );
            } else {
              return (
                <Text fontWeight={300} key={index}>
                  {a.name},
                </Text>
              );
            }
          })
        ) : (
          <Text fontWeight={300}>No languages found.</Text>
        )}
      </Flex>
    </VStack>
  );
};

export default RightDetail;
