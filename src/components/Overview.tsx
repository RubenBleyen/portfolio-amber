import { Grid, GridItem, Center, Image, HStack } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import PortfolioGrid from "../components/PortfolioGrid";
import { useState } from "react";
import { Portfolio } from "./useCards";
import Info from "./Info";

function App() {
  const [myPortfolio, SetMyPortfolio] = useState<Portfolio>({} as Portfolio);
  return (
    <Grid
      padding={5}
      templateAreas={{
        base: `"nav nav nav nav" "info overview overview overview"`,
        lg: `"nav nav nav nav" "info overview overview overview"`,
      }}
      templateColumns={{
        base: "1fr 1fr 1fr 1fr",
        lg: "1fr 1fr 1fr 1fr ",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem justifySelf={"end"} width="50%" marginTop={"50px"} area="info">
        <Info portfolio={myPortfolio}></Info>
      </GridItem>
      <GridItem width="50%" marginLeft={"10%"} marginTop={"50px"} area="overview">
        <PortfolioGrid
          selectedImage={myPortfolio}
          onSelectedImage={(portfolio) => SetMyPortfolio(portfolio)}
        ></PortfolioGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
