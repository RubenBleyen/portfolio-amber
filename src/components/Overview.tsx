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
        base: `"nav" "overview"`,
        md: `"nav nav nav nav" "info overview overview"`,
        lg: `"nav nav nav nav" "info info overview overview"`,

      }}
      templateColumns={{
        base: "100% 100%",
        md: "1fr 1fr 1fr ",
        lg: "1fr 1fr 1fr 1fr ",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem hidden={myPortfolio.image_background == null} justifySelf={"center"} width="48vh" marginTop={"15vh"} area="info">
        <Info portfolio={myPortfolio}></Info>
      </GridItem>
      <GridItem justifySelf={"center"} width="80%" marginTop={"10vh"} area="overview">
        <PortfolioGrid
          selectedImage={myPortfolio}
          onSelectedImage={(portfolio) => SetMyPortfolio(portfolio)}
        ></PortfolioGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
