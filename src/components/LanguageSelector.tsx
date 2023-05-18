import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useLanguages, { Language } from "../hooks/useLanguges";

interface Props {
  selectedLanguage: Language | null;
  onSelectLanguage: (language: Language) => void;
}

const LanguageSelector = ({ selectedLanguage, onSelectLanguage }: Props) => {
  const { data } = useLanguages();

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedLanguage?.english_name || "Languages"}
      </MenuButton>
      <MenuList maxHeight="300px" overflowY="auto">
        {data.map((language) => (
          <MenuItem
            onClick={() => onSelectLanguage(language)}
            key={language.iso_639_1}
          >
            {language.english_name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default LanguageSelector;
