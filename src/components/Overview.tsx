import { Grid, GridItem, Center, Flex, Box } from '@chakra-ui/react'
import NavBar from '../components/NavBar'
import PortfolioGrid from '../components/PortfolioGrid'
import SlideShow from '../components/SlideShow'
import { BrowserRouter, Route } from 'react-router-dom';

function App() {

  return (
    <Grid padding={5}
      templateAreas={{
        base: `"nav""overview"`,
        lg: `"nav nav" "overview"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "1fr ",
      }}
    >
      <GridItem area="nav"><NavBar/>
      </GridItem>
      <GridItem marginTop={"50px"} area='overview'>
      <PortfolioGrid></PortfolioGrid>
      </GridItem>
    </Grid>
  )
}

export default App