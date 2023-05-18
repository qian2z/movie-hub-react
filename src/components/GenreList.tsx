import { Button, List, ListItem } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data } = useGenres();

  const newData = data.filter((genre) => genre.name !== "Crime");

  return (
    <List marginTop={8}>
      {newData.map((genre) => (
        <ListItem key={genre.id} paddingY={5}>
          <Button
            fontWeight={genre.id === selectedGenre?.id ? "bold" : ""}
            onClick={() => onSelectGenre(genre)}
            variant="link"
            fontSize="xl"
          >
            {genre.name}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
