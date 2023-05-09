import { Text, SimpleGrid, Box, Flex } from "@chakra-ui/react";
import PortfolioCard from "./PortfolioCard";
import { Portfolio, useCards } from "./useCards";

interface Props {
  onSelectedImage: (image: Portfolio) => void;
  selectedImage: Portfolio | null;
}

const PortfolioGrid = ({ onSelectedImage, selectedImage }: Props) => {
  const { data, isLoading, error } = useCards();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        justifyContent="center"
        spacing={5}
        templateColumns="repeat(auto-fill, minmax(8vw, 1fr))"
      >
        {data.map((portfolio) => (
          <Flex onClick={() => onSelectedImage(portfolio)}>
            <PortfolioCard
              key={portfolio.id}
              portfolio={portfolio}
            ></PortfolioCard>
          </Flex>
        ))}
      </SimpleGrid>
    </>
  );
};

export default PortfolioGrid;
