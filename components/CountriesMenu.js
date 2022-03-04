import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  ChevronDownIcon,
} from "@chakra-ui/react";
import React from "react";

const CountriesMenu = () => {
  return (
    <Menu>
      <MenuButton rightIcon={<ChevronDownIcon />}>Actions</MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default CountriesMenu;
