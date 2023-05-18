import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  selectedSort: string;
  onSelectSortOrder: (sortOrder: string) => void;
}

const SortSelector = ({ selectedSort, onSelectSortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "popularity.desc", label: "Popularity" },
    { value: "primary_release_date.desc", label: "Release Date" },
    { value: "vote_average.desc", label: "Average Rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value == selectedSort
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrder(order.value)}
            key={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
