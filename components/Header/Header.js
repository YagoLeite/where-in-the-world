import React from "react";
import {
  Flex,
  IconButton,
  Link,
  useColorMode,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";

import { BsMoon, BsSun } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";

const Header = () => {
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(BsMoon, BsSun);
  const bg = useColorModeValue("hsl(0, 0%, 98%)", "gray.800");

  return (
    <Flex bg={bg} w="100%" justify="space-between">
      <Link href="/">
        <Heading fontWeight={800} fontSize={["20px", "24px", "28px"]}>
          Where in the world
        </Heading>
      </Link>
      <Flex h="100%" justify="center" align="center">
        <Link
          isExternal
          aria-label="Yago Leite GitHub page"
          href="https://github.com/YagoLeite"
        >
          <IconButton
            size="md"
            fontSize="lg"
            aria-label={`Switch to ${text} mode`}
            variant="ghost"
            color="current"
            onClick={toggleMode}
            _hover={{ color: "gray.600" }}
            icon={<FiGithub />}
          />
        </Link>
        <IconButton
          size="md"
          fontSize="lg"
          aria-label={`Switch to ${text} mode`}
          variant="ghost"
          color="current"
          _hover={{ color: "gray.600" }}
          onClick={toggleMode}
          icon={<SwitchIcon />}
        />
      </Flex>
    </Flex>
  );
};

export default Header;
