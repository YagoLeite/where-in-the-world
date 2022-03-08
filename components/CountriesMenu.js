import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";

import React from "react";
import { CountriesState } from "../context/Context";

const CountriesMenu = () => {
  const { region, setRegion } = CountriesState();
  console.log(region);
  return (
    <Menu>
      <MenuButton
        borderWidth="1px"
        shadow="lg"
        _hover={{ bg: "transparent" }}
        _active={{ bg: "transparent" }}
        bg="transparent"
        as={Button}
        rightIcon={<IoIosArrowDown />}
        maxW="300px"
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
