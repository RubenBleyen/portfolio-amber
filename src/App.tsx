
import './App.css'
import { Grid, GridItem, Center } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import PortfolioGrid from './components/PortfolioGrid'

function App() {

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "1fr",
      }}

    >
      <GridItem area="nav"><NavBar/>
      </GridItem>
      <GridItem padding={5} area="main">
        <PortfolioGrid></PortfolioGrid>
      </GridItem>
    </Grid>
  )
}

export default App
