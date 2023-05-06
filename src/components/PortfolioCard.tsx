import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Portfolio } from "./useCards";

interface Props {
  portfolio: Portfolio;
  
}
const PortfolioCard = ({ portfolio }: Props) => {
  return (
    <Card maxW="lg" maxH="lg" borderRadius={10} overflow={"hidden"}>
      <Image
        className="hover-zoom"
        width={"100%"}
        height={"100%"}
        objectFit="cover"
        src={`/${portfolio.image_background}`}
      ></Image>
    </Card>
  );
};

export default PortfolioCard;
