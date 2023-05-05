import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Portfolio } from "./useCards";

interface Props {
  portfolio: Portfolio;
}
const PortfolioCard = ({ portfolio }: Props) => {
  return (
    <Card maxW="md" maxH="md" borderRadius={10} overflow={"hidden"}>
      <Image
        className="hover-zoom"
        height={350}
        objectFit="cover"
        src={`/${portfolio.image_background}`}
      ></Image>
    </Card>
  );
};

export default PortfolioCard;
