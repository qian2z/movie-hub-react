import { HStack, Icon } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { RiMovie2Fill } from "react-icons/ri";

interface Props {
  onSearch: (searchedText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack marginX={3} padding="10px">
      <Icon mr={3} as={RiMovie2Fill} w={10} h={10} />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
