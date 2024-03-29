import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";

import React from "react";
import { CountriesState } from "../context/Context";

const CountriesMenu = () => {
  const { setRegion } = CountriesState();
  return (
    <Menu>
      <MenuButton
        borderWidth="1px"
        _hover={{ bg: "transparent" }}
        _active={{ bg: "transparent" }}
        bg="transparent"
        as={Button}
        rightIcon={<IoIosArrowDown />}
        w="100%"
        display="flex"
        justifyContent="left"
        align="left"
        textAlign={["left", "left", "center", "center"]}
        boxShadow="sm"
      >
        Filter by Region
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => setRegion("All")}>All</MenuItem>
        <MenuItem onClick={() => setRegion("Africa")}>Africa</MenuItem>
        <MenuItem onClick={() => setRegion("Americas")}>Americas</MenuItem>
        <MenuItem onClick={() => setRegion("Asia")}>Asia</MenuItem>
        <MenuItem onClick={() => setRegion("Europe")}>Europe</MenuItem>
        <MenuItem onClick={() => setRegion("Oceania")}>Oceania</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default CountriesMenu;
