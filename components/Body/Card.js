import { Box, VStack, Text, Image, Flex } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const Card = ({ data }) => {
  const router = useRouter();

  return (
    <Flex
      as={motion.div}
      whileHover={{ scale: 1.1 }}
      direction="column"
      onClick={() => router.push(data.name)}
      cursor="pointer"
      w="100%"
      h="100%"
      gap="15px"
      boxShadow="lg"
    >
      <Flex
        justifyContent="left"
        w="100%"
        alignItems="center"
        overflow="hidden"
      >
        <Image
          h="220px"
          w="100%"
          objectFit="cover"
          alt="Country Flag"
          src={data.flag}
        />
      </Flex>
      <Flex direction="column" gap="5px" pl="10px">
        <Text fontWeight={700} fontSize="20px">
          {data?.name}
        </Text>
        <Flex gap={1}>
          <Text fontWeight={600}>Population :</Text>
          <Text fontWeight={300}>{data.population}</Text>
        </Flex>
        <Flex gap={1}>
          <Text fontWeight={600}>Region: </Text>
          <Text fontWeight={300}>{data.region}</Text>
        </Flex>
        <Flex gap={1}>
          <Text fontWeight={600}>Capital: </Text>
          <Text fontWeight={300}>{data.capital}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Card;

{
  /* <VStack
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
  overflow="hidden"
>
  <Image objectFit="cover" alt='Country Flag' src={props.data.flag} />
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
</VStack> */
}
