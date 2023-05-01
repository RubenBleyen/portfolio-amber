
import './App.css'
import { Grid, GridItem, Show } from '@chakra-ui/react'

function App() {

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}

    >
      <GridItem area="nav" bg='green'>NAv
      </GridItem>
      <GridItem area="aside" bg='blue'>
        ASIDE
      </GridItem>
      <GridItem area="main" bg='yellow'>
        MAIN
      </GridItem>
    </Grid>
  )
}

export default App
