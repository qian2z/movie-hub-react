import { Button, HStack, Heading } from "@chakra-ui/react";
import { MovieQuery } from "../App";
import { ImCross } from "react-icons/im";

interface Props {
  movieQuery: MovieQuery;
  onClear: () => void;
}

const MovieHeading = ({ movieQuery, onClear }: Props) => {
  const normalHeading = `${movieQuery.language?.english_name || ""} ${
    movieQuery.genre?.name || ""
  } Movies`;

  const searchHeading = `Search '${movieQuery.searchText}'`;

  const heading =
    movieQuery.searchText === undefined ? normalHeading : searchHeading;

  const setButton =
    movieQuery.genre == null &&
    movieQuery.language == null &&
    movieQuery.searchText == undefined
      ? false
      : true;

  return (
    <HStack>
      <Heading as="h1" padding={2} marginY={1} fontSize="5xl">
        {heading}
      </Heading>
      {setButton && (
        <Button onClick={onClear}>
          <ImCross />
        </Button>
      )}
    </HStack>
  );
};

export default MovieHeading;
