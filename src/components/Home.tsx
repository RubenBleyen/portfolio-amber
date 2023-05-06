import { Grid, GridItem, Center, Flex, Box } from '@chakra-ui/react'
import NavBar from '../components/NavBar'
import PortfolioGrid from '../components/PortfolioGrid'
import SlideShow from '../components/SlideShow'

function App() {

  return (
    <Grid padding={5}
      templateAreas={{
        base: `"nav" "main" "overview"`,
        lg: `"nav nav" "main" "overview"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "1fr ",
      }}
    >
      <GridItem area="nav"><NavBar/>
      </GridItem>
      <GridItem justifySelf={"center"} marginTop={"4%"} area="main">
        <Center>
          <SlideShow></SlideShow>
        </Center>
      </GridItem>
    </Grid>
  )
}

export default App