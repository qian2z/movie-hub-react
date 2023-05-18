import { Badge } from "@chakra-ui/react";

interface Props {
  date: string;
}

const YearBadge = ({ date }: Props) => {
  const year = parseInt(date.substring(0, 4));
  const currentYear = new Date().getFullYear();

  const label =
    year === currentYear ? "NEW" : year > currentYear ? "COMING SOON" : year;
  const color =
    year === currentYear ? "green" : year > currentYear ? "orange" : "blue";

  return (
    <Badge
      ml={1.5}
      mb={1.5}
      colorScheme={color}
      fontSize="16px"
      paddingX={1.5}
      paddingY={0.5}
      borderRadius={4}
    >
      {label}
    </Badge>
  );
};

export default YearBadge;
