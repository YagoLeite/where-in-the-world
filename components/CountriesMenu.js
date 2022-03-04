import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  ChevronDownIcon,
} from "@chakra-ui/react";
import React from "react";
import { CountriesState } from "../context/Context";

const CountriesMenu = () => {
  const { region, setRegion } = CountriesState();
  console.log(region);
  return (
    <Menu>
      <MenuButton rightIcon={<ChevronDownIcon />}>Filter by Region</MenuButton>
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
